const Router = require("koa-router");
const router = new Router();

const { PositiveIntegerValidator} = require('../../validators/validator')

router.post('/v1/:id/classic', async(ctx, next) => {

    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body
    // console.log(path,query,headers,body)

    const v = await new PositiveIntegerValidator().validate(ctx);
    ctx.body = { key: "success" };

})



module.exports = router;