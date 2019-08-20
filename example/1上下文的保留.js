const Koa = require("koa");

const app = new Koa();

// 注册
// 只会自动执行第一个中间件，其他中间件需要自己调用才会执行, 只要调用next才会执行下一个
app.use(async (ctx, next) => {
	// 上下文
    await next()
	const r = ctx.r;
	console.log(r, "r");
});

app.use(async (ctx, next) => {
    const axios = require('axios')
    const res = await axios.get('http://www.baidu.com')
    ctx.r = res;
    await next()
});

// 应用程序对象 中间件

app.listen(3001);
