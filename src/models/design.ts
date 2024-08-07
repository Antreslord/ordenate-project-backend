import { DataTypes } from "sequelize";
import db from '../db/connection';

const design = db.define('designs',{
    title: {
        type: DataTypes.STRING
    },
    date_creation: {
        type: DataTypes.DATE
    },
    desing:{
        type: DataTypes.BLOB
    },
    description: {
        type: DataTypes.STRING
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

export default design