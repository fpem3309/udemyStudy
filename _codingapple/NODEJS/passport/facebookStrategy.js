const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_TEST_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_TEST_CLIENT_SECRET,
        callbackURL: '/auth/facebook/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('facebook profile : ', profile);
        try {
          db.collection('login').findOne(
            // 페이스북 플랫폼에서 로그인 했고 & id필드에 페이스북 아이디가 일치할경우
            { id: profile.id, provider: 'facebook' }, function (err, result) {
              // 이미 가입된 페이스북 프로필이면 성공
              if (result) {
                console.log('facebook result', result);
                return done(null, result);
              } else {
                // 가입되지 않는 유저면 회원가입 시키고 로그인을 시킨다
                db.collection('login').insertOne({
                  id: profile.id,
                  email: profile.email,
                  nick: profile.name,
                  provider: 'facebook',
                  profile_img: profile.profileImage
                }, function (err, result) {
                  console.log('facebook result', result.ops[0]);
                  return done(null, result.ops[0]); // 회원가입하고 로그인 인증 완료
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