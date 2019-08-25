const {sequelize} = require('../../core/db')
const {Sequelize,Model} = require('sequelize')


class Flow extends Model{

}

Flow.init({
    index: Sequelize.INTEGER,
    art_id: Sequelize.INTEGER,
    type: Sequelize.INTEGER // 100 movie 200 music 300 sentence
},{
    sequelize,
    tableName:'flow'
})

module.exports = {
    Flow
}