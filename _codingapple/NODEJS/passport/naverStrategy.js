const passport = require('passport')
const { Strategy: NaverStrategy, Profile: NaverProfile } = require('passport-naver-v2');

module.exports = () => {
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_CLIENT_SECRET,
        callbackURL: '/auth/naver/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('naver profile : ', profile);
        try {
          db.collection('login').findOne(
            // 네이버 플랫폼에서 로그인 했고 & id필드에 네이버 아이디가 일치할경우
            { id: profile.id, provider: 'naver' }, function (err, result) {
              // 이미 가입된 네이버 프로필이면 성공
              if (result) {
                console.log('naver result', result);
                return done(null, result);
              } else {
                // 가입되지 않는 유저면 회원가입 시키고 로그인을 시킨다
                db.collection('login').insertOne({
                  id: profile.id,
                  email: profile.email,
                  nick: profile.name,
                  provider: 'naver',
                  profile_img: profile.profileImage
                }, function (err, result) {
                  console.log('naver result', result.ops[0]);
                  return done(null,  result.ops[0]); // 회원가입하고 로그인 인증 완료
                });
              }
            });
        } catch (error) {
          console.error(error);
          done(error);
        }
      },
    ),
  );
};