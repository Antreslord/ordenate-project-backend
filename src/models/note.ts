import { DataTypes } from "sequelize";
import db from '../db/connection'

const note = db.define('notes',{
    title: {
        type: DataTypes.STRING
    },
    date_creation: {
        type: DataTypes.DATE
    },
    content: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.STRING
    },
    id_user:{
        type: DataTypes.INTEGER
    },
    id_project: {
        type: DataTypes.INTEGER
    }
},{
    createdAt: false,
    updatedAt: false
})

export default note