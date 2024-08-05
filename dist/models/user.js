"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const user = connection_1.default.define('users', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    profession: {
        type: sequelize_1.DataTypes.STRING
    }, photo_user: {
        type: sequelize_1.DataTypes.BLOB
    }, email: {
        type: sequelize_1.DataTypes.STRING
    }, password: {
        type: sequelize_1.DataTypes.STRING
    }, apareance: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = user;
