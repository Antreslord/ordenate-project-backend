import { DataTypes } from "sequelize";
import db from '../db/connection'

const project = db.define('projects',{
    title: {
        type: DataTypes.STRING
    },
    analysis: {
        type: DataTypes.STRING
    },
    number_activities: {
        type: DataTypes.INTEGER
    },
    date_creation: {
        type: DataTypes.DATE
    },
    id_user: {
        type: DataTypes.INTEGER
    }
},{
    createdAt: false,
    updatedAt: false
})

export default project