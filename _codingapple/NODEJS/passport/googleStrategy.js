const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('google profile : ', profile);
        try {
          db.collection('login').findOne(
            // 네이버 플랫폼에서 로그인 했고 & id필드에 네이버 아이디가 일치할경우
            { id: profile.id, provider: 'google' }, function (err, result) {
              // 이미 가입된 네이버 프로필이면 성공
              if (result) {
                console.log('google result', result);
                return done(null, result);
              } else {
                // 가입되지 않는 유저면 회원가입 시키고 로그인을 시킨다
                db.collection('login').insertOne({
                  id: profile.id,
                  email: profile.emails[0].value,
                  nick: profile._json.name,
                  provider: 'google',
                  profile_img: profile.photos[0].value
                }, function (err, result) {
                  console.log('google result', result.ops[0]);
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