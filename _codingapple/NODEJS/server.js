const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, '/front/meme-front/dist/')));
// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
// }));

app.use(express.json());
app.use('/public', express.static('/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('port', process.env.PORT || 8000);

// socket.io
const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);


MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }, function (error, client) {
    if (error) return console.log(error);

    db = client.db('Memeapp');

    // db.collection('min').insertOne({_id:1, title:'첫밈',content:'ㅋㅋㅋ'}, function (error,result){
    //     console.log('저장');
    // })

    //서버띄우는 코드 여기로 옮기기
    http.listen(process.env.PORT, function () { // app -> http로 바꿈
        console.log('listening on ' + process.env.PORT)
    });
})

// app.get('/', (req, res) => {    // vue 연동
// res.sendFile(path.join(__dirname+'front/meme-front/dist/index.html'));
// res.json(path.join(__dirname, '/front/meme-front/dist/index.html'));
// });

/**
 * ==========================
 *      mongodb + ejs CRUD
 * ==========================
 */

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/write', (req, res) => {
    res.render('write.ejs')
})


app.get('/list', (req, res) => {

    db.collection('Meme').find().toArray(function (err, result) { // 모든 데이터 가져오기
        console.log(result);

        res.render('list.ejs', { memes: result })   // 데이터 EJS파일에 전달
    });

})


app.get('/detail/:id', (req, res) => {
    db.collection('Meme').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
        console.log(result);
        res.render('detail.ejs', { data: result })
    })
})

app.get('/edit/:id', (req, res) => {
    db.collection('Meme').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
        res.render('edit.ejs', { data: result })
    })
})



/**
 * ==========================
 *      session auth
 * ==========================
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({ secret: 'secret', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/fail' // 실패하면 이동할 곳
}), (req, res) => {
    res.redirect('/')
})

passport.use(new LocalStrategy({
    usernameField: 'userId',
    passwordField: 'userPassword',
    session: true,  // 세션 저장시
    passReqToCallback: false,   // 다른 정보 검증시
}, function (입력한아이디, 입력한비번, done) {
    console.log(입력한아이디, 입력한비번);
    db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
        if (에러) return done(에러)

        if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
        if (입력한비번 == 결과.pw) {
            return done(null, 결과)
        } else {
            return done(null, false, { message: '비번틀렸어요' })
        }
    })
}));

passport.serializeUser(function (user, done) {    // id를 이용해 세션을 저장시킴
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {    // 이 세션 데이터를 가진 사람 DB에서 찾기
    db.collection('login').findOne({ id: id }, function (err, result) {
        done(null, result)    // id가 위 user.id 인걸 찾아서 /mypage req.user에 담김
    })
})

// 마이페이지
app.get('/mypage', isLogin, (req, res) => { // isLogin함수 미들웨어로 사용
    console.log(req.user)   // deserializeUser에서 전달
    res.render('mypage.ejs', { user: req.user })
})

// 로그인 했는지 확인하는 함수
function isLogin(req, res, next) {
    if (req.user) {   // 로그인 후 세션이 있으면 req.user가 항상있음
        next()
    } else {
        res.send('로그인이 필요합니다.')
    }
}


/**
 * ===================================
 *      query string + search index
 * ===================================
 */

// 쿼리스트링 검색결과 list
app.get('/search', (req, res) => {
    console.log(req.query.title)  // 쿼리스트링 값
    // db.collection('Meme').find({ meme_title: req.query.title }).toArray((err, result) => {   // 일반 검색

    // atlas 일반 index = 띄어쓰기 단위임, 한글 친화적x
    // db.collection('Meme').find({ $text: { $search: req.query.title } }).toArray((err, result) => {  // index로 Binary 검색


    var conditions = [
        {
            $search: {
                index: 'titleSearch',   // search index 이름
                text: {
                    query: req.query.title, // 쿼리
                    path: 'meme_title'  // 제목,날짜 둘다 찾고 싶으면 ['제목', '날짜']
                }
            }
        }
        // 검색조건 추가하기
        , { $sort: { _id: -1 } } // 1 또는 -1로 정렬(ASC, DESC), 안하면 검색점수 별 정렬
        , { $limit: 10 }    // 개수 limit
        , { $project: { meme_title: 1, _id: 1, meme_content: 1, score: { $meta: "searchScore" } } }  // 검색결과 필터주기 (1 = 가져옴, 0|안씀 = 안가져옴)
    ]

    db.collection('Meme').aggregate(conditions).toArray((err, result) => {   // search index에서 검색하는 법
        console.log(result);
        res.render('search-list.ejs', { memes: result })
    })
})



/**
 * ===================================
 *      회원기능 포함한 게시판 기능
 * ===================================
 */
// 회원 기능이 필요하면 passport 세팅 밑부분에 있어야 함

// 회원가입
app.post('/register', (req, res) => {

    db.collection('login').insertOne({ id: req.body.userId, pw: req.body.userPassword }, function (err, result) {
        res.redirect('/')
    })
})

// 게시물 만들기
app.post('/add', (req, res) => {

    db.collection('counter').findOne({ name: '게시물갯수' }, function (err, result) {   // 총 게시물 수 구하기
        console.log(result.totalPost)
        let totalPosts = result.totalPost

        let postData = {
            _id: totalPosts + 1,
            meme_title: req.body.memeTitle,
            meme_content: req.body.memeContent,
            meme_writer: req.user._id
        }


        db.collection('Meme').insertOne(postData, function (err, result) {
            if (err) throw err;
            res.send('저장 완료')
            console.log(req.body, '저장 완료')

            // counter 값 +1하기
            // $set = 바꿀값, $inc = 증가값
            db.collection('counter').updateOne({ name: '게시물갯수' }, { $inc: { totalPost: 1 } }, function (err, result) {   // 값 - 수정할 데이터, 수정 값(operator)
                if (err) { return console.log(err) }
            })
        })
    });

})


// 게시물 삭제
app.delete('/delete', (req, res) => {
    console.log(req.body)
    req.body._id = parseInt(req.body._id); // 정수변환

    // 요청 아이디랑도 맞아야 삭제
    let deleteData = { _id: req.body._id, meme_writer: req.user._id }


    // deleteOne({_id: req.body} 형식으로 삭제
    db.collection('Meme').deleteOne(deleteData, function (err, result) {
        if (err) { console.log(err) }
        console.log('삭제완료');
        res.status(200).send({ massage: '성공' });
        // res.status(400).send({ massage: '실패' });
    })
})


// 게시물 수정
app.put('/edit', (req, res) => {

    let editData = { _id: parseInt(req.body.memeId), meme_writer: req.user._id }

    db.collection('Meme').updateOne(editData, { $set: { meme_title: req.body.memeTitle, meme_content: req.body.memeContent } }, function (err, result) {
        console.log('수정 완료')
        res.redirect('/list')
    })
})


// routes
app.use('/shop', require('./routes/shop.js'))   //  /shop 경로로 요청했을때 정한 미들웨어(라우터) 적용
app.use('/board/sub', require('./routes/board.js'))



/**
 * =================
 *      upload
 * =================
 */


let storage = multer.diskStorage({
    destination(req, file, done) {
        done(null, 'public/image/');    // 업로드 경로
    },
    filename(req, file, cb) {
        cb(null, file.originalname)   // 파일명 설정
    },
    filefilter(req, file, cb) {  // 파일 확장자 거르기

    },
    limits: {}   // 파일 사이즈 정하기
})

let upload = multer({ storage: storage })


app.get('/upload', (req, res) => {
    res.render('upload.ejs')
})

app.post('/upload', upload.single('profile'), (req, res) => { // upload 미들웨어로 넣기
    res.send('업로드 완료')
})

app.get('/image/:imageName', (req, res) => {
    res.sendFile(__dirname + '/public/image/' + req.params.imageName)
})


/**
 * =================
 *      chat
 * =================
 */

const { ObjectId } = require('mongodb') // objectid로 만들기

app.post('/chat', isLogin, (req, res) => {
    let chatroomData = {
        title: '채팅방',
        member: [ObjectId(req.body.postWriter), req.user._id],    // 요청당한사람, 요청한사람
        date: new Date()
    }
    db.collection('chatroom').insertOne(chatroomData, function (err, result) {
        res.send('채팅방 생성')
    })
})

app.get('/chat', isLogin, (req, res) => {
    db.collection('chatroom').find({ member: req.user._id }).toArray(function (err, result) {
        res.render('chat.ejs', { data: result, user: req.user._id })
    })
})

app.post('/message', isLogin, (req, res) => {
    messageData = {
        parent: ObjectId(req.body.parent),
        content: req.body.content,
        userid: req.user._id,
        date: new Date()
    }
    db.collection('message').insertOne(messageData).then(() => {
        console.log('성공')
        res.send('성공')
    }).catch(() => {

    })
})



/**
 * ==========================
 *      Server Sent Event
 * ==========================
 */

app.get('/message/:parentId', isLogin, (req, res) => {


    res.writeHead(200, { // 여러번 응답 가능
        "Connection": "keep-alive",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
    });

    db.collection('message').find({ parent: ObjectId(req.params.parentId) }).toArray()
        .then((result) => {
            res.write('event: test\n');  // 보낼 데이터 이름
            res.write('data:' + JSON.stringify(result) + '\n\n');   // 보낼 데이터(문자만 전송가능)
        })

    // change stream
    const pipeline = [
        { $match: { 'fullDocument.parent': ObjectId(req.params.parentId) } }
    ];
    const changeStream = db.collection('message').watch(pipeline);

    changeStream.on('change', (result) => {
        console.log(result.fullDocument);
        res.write('event: test\n');  // 보낼 데이터 이름
        res.write('data:' + JSON.stringify([result.fullDocument]) + '\n\n');   // 보낼 데이터(문자만 전송가능)
    });

})


/**
 * ==========================
 *      Socket.io
 * ==========================
 */

app.get('/socket', (req, res) => {
    res.render('socket.ejs')
})

io.on('connection', function (socket) {  // 웹소켓 이벤트 리스너
    console.log('유저 접속됨ㅋ');

    socket.on('user-send', function (usermessage) {   // 클라이언트에서 보낸 웹소켓 데이터 수신
        console.log(usermessage);
        io.emit('broadcast', usermessage)// 클라이언트에게 데이터 전송(전체)

        //io.to(socket.id).emit('broadcast',usermessage) // 특정 목적지(유저) 정해서 전송(자동 발급되는 유니크한 socket.id가 있음)
    })

    socket.on('join-room', function (room) { // 클라이언트에서 보낸 데이터 수신
        // socket.join('room1')
        socket.join(room)   // 해당 room에서만 가능
    })

    socket.on('room1-send', function (usermessage) { // 클라이언트에서 보낸 데이터 수신
        io.to('room1').emit('broadcast', usermessage)// room1의 클라이언트에게만 데이터 전송
    })
})


/**
 * ==========================
 *     react or vue
 * ==========================
 */


app.get('/image-memes', (req, res) => {
    db.collection('Meme').find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send({ data: result });
        // res.render('image-memes-list', { data: result });
    })
});

app.get('/getImage', (req, res) => {
    db.collection('Meme').find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(
            [
                { 'data': result },
            ]
        );
    })
});


// front에서 INSERT Meme
app.post('/upload', upload.array('image'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.post("/insertMeme", (req, res) => {
    let item = req.body.data;
    db.collection('Memes').insertOne(item, function (err, result) {
        if (err) throw err;
        res.send('success');
    })
})

app.get('/gif', (req, res) => {
    db.collection('Memes').find({}).toArray(function (err, result) {
        if (err) throw err;
        res.send(
            [
                { 'data': result },
            ]
        );
    })
});