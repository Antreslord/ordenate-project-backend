"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const project = connection_1.default.define('projects', {
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    analysis: {
        type: sequelize_1.DataTypes.STRING
    },
    number_activities: {
        type: sequelize_1.DataTypes.INTEGER
    },
    date_creation: {
        type: sequelize_1.DataTypes.DATE
    },
    id_user: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = project;
