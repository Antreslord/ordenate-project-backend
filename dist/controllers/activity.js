"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateActivity = exports.postActivity = exports.deleteActivity = exports.getActivity = exports.getActivities = void 0;
const activity_1 = __importDefault(require("../models/activity"));
const getActivities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listActivity = yield activity_1.default.findAll();
    res.json(listActivity);
});
exports.getActivities = getActivities;
const getActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findActivity = yield activity_1.default.findByPk(id);
    if (findActivity) {
        res.json(findActivity);
    }
    else {
        res.status(404).json({
            msg: `No existe la actividad con el id ${id}`
        });
    }
});
exports.getActivity = getActivity;
const deleteActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findActivity = yield activity_1.default.findByPk(id);
    if (!findActivity) {
        res.status(404).json({
            msg: `No existe una actividad con el id ${id}`
        });
    }
    else {
        yield findActivity.destroy();
        res.json({
            msg: `El usuario con el id ${id} ha sido eliminado`
        });
    }
});
exports.deleteActivity = deleteActivity;
const postActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield activity_1.default.create(body);
        res.json({
            msg: 'La actividad fue agregada con exito'
        });
    }
    catch (error) {
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        });
    }
});
exports.postActivity = postActivity;
const updateActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const findActivity = yield activity_1.default.findByPk(id);
    try {
        if (findActivity) {
            yield findActivity.update(body);
            res.json({
                msg: `La actividad fue actualizada con exito`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe la actividad con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        });
    }
});
exports.updateActivity = updateActivity;
