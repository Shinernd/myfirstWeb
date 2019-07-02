# myfirstWeb
Node.js (express, mongoose, etc.)

[20180628THU]
1. req, res를 사용하여 통신하는 것을 Ajax방식이라고 함 (X아님X)
=> 페이지 전체 reload없이 해당 부분만을 render하는 방식
2. const 이름 = require('모듈'); / module.export = 모듈
3. routing: get, post 등 한 URL에 대해 방식 라우팅을 다르게 할 수 있음
4. app.get('/', callback); 또는 app.route('/').get(callback).post(callback);
5. 접속 또는 요청이 어떤 방식인지 보내는 파일에서
6. res.render('페이지');
7. 응답 매소드는 render말고도 download, end, json, jsonp, redirect, send, sendFile, sendSatus가 있음

[20180629FRI]
1. express.Router 모듈식 마운팅?
=> const router = require('express').Router();
2. MongoDB download, execute, connect!
3. models에서 Schema 작성

[20180702MON]
1. models\school.js> use statics for defining functions in model file
2. routes\index.js> 1. statics 사용
3. app.js> app.use('/', index); : '/'에 대한 요청을 routes\index.js로 route

[20180704WED]
1. install git bash: connect local repository to remote / first commit
2. create README.md
3. form 태그의 action -> routes\index.js에서 찾아서 실행 ?(query) / =(param) req.query.이름
4. statics 사용할 때 then(), catch()?
=> statics에서 return된 값이 then으로

[20180705THU]
1. 검색 결과가 없으면 render할 searcherr.ejs view페이지 생성
2. post방식을 통해 DB에 데이터 추가... 하고 싶다.
    1) schoolSchema.statics.create에서 new this가 안됨
    2) new schoolSchema도 안됨
=> not constructor

[20180706FRI]
1. DB에 데이터 추가
    3) mongoose.model이 생성자를 생성
    -> mongoose.model을 new mongoose.schema 바로 다음으로
    -> schoolSchema.statics.findOneByName이 함수의 기능을 잃음
    4) schoolSchema.statics.create 전에 mongoose.model
    -> 데이터 추가 안됨
    -> 인줄 알았으나 view페이지 수정 후 작동
    +) 맘에 안듦
2. findOneByName은 해당 name을 가진 데이터를 하나만 찾을 수 있음
    -> findOneByName에 findOne 대신 find 사용, 이름을 findByName으로 변경
    -> 없는 데이터 검색 시 searcherr render 실패 (빈 배열 boolean == true)
=> 빈 배열.length boolean == false

[20180707SAT]
완성!

[20180709MON]
1. All 버튼 수정
=> 진짜 완성!
