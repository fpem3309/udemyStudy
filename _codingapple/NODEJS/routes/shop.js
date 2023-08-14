let router = require('express').Router(); // Router함수 사용

// 로그인 했는지 확인하는 함수
function isLogin(req, res, next) {
  if (req.user) {   // 로그인 후 세션이 있으면 req.user가 항상있음
      next()
  } else {
      res.send('로그인이 필요합니다.')
  }
}

router.use('/shirts',isLogin); // 이 페이지 모든 url에 적용할 미들웨어 or 특정 url

router.get('/shirts', (req, res) => {
  res.send('셔츠 페이지')
})


router.get('/pants', (req, res) => {
  res.send('바지 페이지')
})

module.exports = router;