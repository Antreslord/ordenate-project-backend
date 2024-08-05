import { DataTypes } from "sequelize";
import db from '../db/connection';

const user = db.define('users',{
    name:{
        type:DataTypes.STRING
    },
    lastname:{
        type: DataTypes.STRING
    },
    profession:{
        type:DataTypes.STRING
    },photo_user:{
        type:DataTypes.BLOB
    },email:{
        type:DataTypes.STRING
    },password:{
        type:DataTypes.STRING
    },apareance:{
        type:DataTypes.BOOLEAN
    }

},{
    createdAt:false,
    updatedAt:false
})

export default user