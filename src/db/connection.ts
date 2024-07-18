import { Sequelize } from "sequelize";

const sequelize = new Sequelize('ordenate', 'Antreslord', '97080807760cCdA',{
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;