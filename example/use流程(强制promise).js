const Koa = require('koa');

const app = new Koa();


// 注册
// 只会自动执行第一个中间件，其他中间件需要自己调用才会执行, 只要调用next才会执行下一个
app.use((ctx, next) => {

    // 上下文
    console.log('hello, 1');
    const a = next();
    console.log(a)
    console.log("hello, 2");



})

app.use((ctx, next) => {
    // Promise async await
    console.log('hello, 3');
    // next
    console.log("hello, 4");
    return 'abc'

})





// 应用程序对象 中间件

app.listen(3001)






