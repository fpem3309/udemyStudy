const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'userId',
    passwordField: 'userPassword',
    session: true,  // 세션 저장시
    passReqToCallback: false,   // 다른 정보 검증시
  }, function (userId, userPw, done) {
    console.log(userId, userPw);
    db.collection('login').findOne({ id: userId }, function (err, result) {
      if (err) return done(err)

      if (!result) return done(null, false, { message: 'not auth' })

      // console.log('hash : ',hash)
      console.log('userPw : ',userPw)
      console.log('result.pw : ',result.pw)
      // console.log('match : ',match)

      // 비동기 콜백
      bcrypt.compare(userPw , result.pw, (err, same) => {
        console.log(same);  //=> true
        if(same){
          return done(null, result)
        }else{
          return done(null, false, { message: 'wrong password' })
        }
      })

      // if (입력한비번 == 결과.pw) {
      //   console.log('로그인성공')
      //   return done(null, 결과)
      // }else {
      //   return done(null, false, { message: 'wrong password' })
      // }
    })
  }));
}