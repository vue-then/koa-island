require("module-alias/register");

const Koa = require("koa");
const parser = require("koa-bodyparser"); // 在post请求时，获取body参数
const path = require("path");
const InitManager = require("./core/init");
const catchError = require("./middlewares/exception");
const static = require("koa-static");


const app = new Koa();
app.use(catchError);
app.use(parser());
app.use(static(path.join(__dirname, './static')))

InitManager.initCore(app);
app.listen(3001);
