"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const activity = connection_1.default.define('activities', {
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    date_creation: {
        type: sequelize_1.DataTypes.DATE
    },
    state: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    deadline: {
        type: sequelize_1.DataTypes.DATE
    },
    time_period: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_user: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_project: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = activity;
