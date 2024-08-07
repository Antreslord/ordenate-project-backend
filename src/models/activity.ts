import { DataTypes } from "sequelize";
import db from '../db/connection'

const activity = db.define('activities',{
    title: {
        type: DataTypes.STRING
    },
    date_creation: {
        type: DataTypes.DATE
    },
    state: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    deadline: {
         type: DataTypes.DATE
    },
    time_period: {
        type: DataTypes.INTEGER
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_project: {
        type: DataTypes.INTEGER
    }
},{
    createdAt: false,
    updatedAt: false
})

export default activity