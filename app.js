// const Koa = require('koa')
// const Router = require('koa-router')

// const app = new Koa();
// const router = new Router()

// router.get('/v1/classic/latest', (ctx,next)=>{
//     ctx.body = {key:'music'}
// })


// app.use(router.routes());
// app.listen(3001);

const Koa = require("koa");

const book = require("./api/v1/book");
const classic = require("./api/v1/classic");

const app = new Koa();

app.use(book.routes());
app.use(classic.routes());

app.listen(3001);
