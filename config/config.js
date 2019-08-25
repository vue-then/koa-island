
module.exports = {
	// prod
	environment: "dev",
	database: {
		dbName: "wxtestbook",
		host: "localhost",
		port: 33061,
		user: "root",
		password: "root",
        // logging: process.env.NODE_ENV !== "production" ? console.log : null
		logging: true
	},
	security: {
		secretKey: "abcdefg",
		expiresIn: 60 * 60 * 24 * 30
	},
	wx: {
        appId: "wxda09ec3f7f2265c8",
        appSecret: "e905da797fa3c6117336ad56344b0376",
		loginUrl:
			"https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code"
	},
	yushu: {
		detailUrl: "http://t.yushu.im/v2/book/id/%s",
		keywordUrl:
			"http://t.yushu.im/v2/book/search?q=%s&count=%s&start=%s&summary=%s"
	},
	host: "http://localhost:3001/"
};