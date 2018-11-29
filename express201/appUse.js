const express = require('express');
const app = express();

function validateUser(req, res, next) {
    res.locals.validated = true;
    console.log("validated ran!!");
    next();
}


// 여기서 methods란 get, post, put, delete를 이야기한다. 
// 모든 methods에 대해 모든 path에 validateUser 적용
// app.use(validateUser); 

// // 모든 method에 대해, /admin path에 validateUser 적용
// app.use('/admin', validateUser);

// // get method에 대해, / path에 validateUser 적용 
// app.get('/', validateUser);
// // 위는 결국 아래 코드와 동일한 코드다. 
// app.get('/', (req, res, next) {
//     res.locals.validated = true;
//     console.log("validated ran!!");
//     next();
// });



app.get('/', (req, res, next) => {
    res.send("<h1>How Nice day today.</h1>");
    console.log(res.locals.validated)
})

app.get('/admin', (req, res, next) => {
    res.send("<h1>How Nice day today Admin.</h1>");
    console.log(res.locals.validated)
})

app.listen(3000);