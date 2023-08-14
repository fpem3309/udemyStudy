const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

module.exports = () => {
   passport.use(
      new KakaoStrategy(
         {
            clientID: process.env.KAKAO_API_KEY, // 카카오 로그인에서 발급받은 REST API 키
            callbackURL: '/auth/kakao/callback', // 카카오 로그인 Redirect URI 경로
         },
         /*
          * clientID에 카카오 앱 아이디 추가
          * callbackURL: 카카오 로그인 후 카카오가 결과를 전송해줄 URL
          * accessToken, refreshToken: 로그인 성공 후 카카오가 보내준 토큰
          * profile: 카카오가 보내준 유저 정보. profile의 정보를 바탕으로 회원가입
          */
         async (accessToken, refreshToken, profile, done) => {
            console.log('kakao profile', profile);
            try {

               db.collection('login').findOne(
                  // 카카오 플랫폼에서 로그인 했고 & id필드에 카카오 아이디가 일치할경우
                  { id: profile.id, provider: 'kakao' }, function (err, result) {
                     console.log(result);
                     if (result) { // 이미 가입된 카카오 프로필이면 성공
                        console.log('kakao result', result);
                        return done(null, result); // 로그인 인증 완료
                     } else {  // 가입되지 않는 유저면 회원가입 시키고 로그인을 시킨다
                        db.collection('login').insertOne({
                           id: profile.id,
                           email: profile._json.kakao_account.email,
                           nick: profile.displayName,
                           provider: 'kakao',
                           profile_img: profile._json.kakao_account.profile.profile_image_url
                        }, function (err, result) {
                           console.log('kakao result', result.ops[0]);
                           return done(null, result.ops[0]); // 회원가입하고 로그인 인증 완료
                        })
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