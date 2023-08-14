
// const passport = require('passport');
const local = require('./localStrategy'); // 로컬서버로 로그인할때
const kakao = require('./kakaoStrategy'); // 카카오서버로 로그인할때
const naver = require('./naverStrategy'); // 네이버서버로 로그인할때
const google = require('./googleStrategy'); // 구글서버로 로그인할때
const facebook = require('./facebookStrategy'); // 페이스북서버로 로그인할때

module.exports = (passport) => {

  passport.serializeUser(function (user, done) {    // id를 이용해 세션을 저장시킴
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {    // 이 세션 데이터를 가진 사람 DB에서 찾기
    db.collection('login').findOne({ id: id }, function (err, result) {
      done(null, result)    // id가 위 user.id 인걸 찾아서 /mypage req.user에 담김
    })
  })

  local();
  kakao();
  naver();
  google();
  facebook();
}
