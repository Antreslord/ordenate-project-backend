import { DataTypes } from "sequelize";
import db from '../db/connection';

const user = db.define('user',{
    name:{
        type:DataTypes.STRING
    },
    lastname:{
        type:DataTypes.STRING
    },profession:{
        type:DataTypes.STRING
    },photoUser:{
        type:DataTypes.BLOB
    },email:{
        type:DataTypes.STRING
    },password:{
        type:DataTypes.STRING
    },theme:{
        type:DataTypes.BOOLEAN
    },

})

export default user