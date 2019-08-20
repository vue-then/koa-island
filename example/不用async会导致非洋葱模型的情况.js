const Koa = require("koa");

const app = new Koa();

// 注册
// 只会自动执行第一个中间件，其他中间件需要自己调用才会执行, 只要调用next才会执行下一个
app.use((ctx, next) => {
	console.log("hello, 1");
	next();
	console.log("hello, 2");
});

app.use(async (ctx, next) => {
	console.log("hello, 3");
	await next();
	console.log("hello, 4");
});

// 执行结果
// 1324

app.listen(3001);
