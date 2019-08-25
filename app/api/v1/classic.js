const Router = require("koa-router");
const { Flow } = require("../../models/flow");
const { Favor } = require("@models/favor");
const { PositiveIntegerValidator, ClassicValidator } = require("@validator");
const router = new Router({
	prefix: "/v1/classic"
});
const { Auth } = require("../../../middlewares/auth");
const { Art } = require("../../models/art");


router.get('/latest', new Auth().m, async(ctx, next) => {

    const flow = await Flow.findOne({
			order: [["index", "DESC"]]
		});
		const art = await Art.getData(flow.art_id, flow.type);
		const i = art.get("image");
		const t = art.image;
		const s = art.getDataValue("image");
		const likeLatest = await Favor.userLikeIt(
			flow.art_id,
			flow.type,
			ctx.auth.uid
		);
		art.setDataValue("index", flow.index);
		art.setDataValue("like_status", likeLatest);
		ctx.body = art;
    

})

// model code first, 表， model
// 面向对象 model Class
// 初始化数据 期刊 数据，SQL
// model
// movie/Sentence/music 扩展性 相似性
// url pubdate title 导演 演员



module.exports = router;