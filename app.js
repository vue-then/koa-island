const Koa = require("koa");
const path = require("path");
const InitManager = require("./core/init");


const app = new Koa();


InitManager.initCore(app);

app.listen(3001);
