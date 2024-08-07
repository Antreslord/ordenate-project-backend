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
exports.deleteDesign = exports.updateDesign = exports.postDesign = exports.getDesign = exports.getDesigns = void 0;
const design_1 = __importDefault(require("../models/design"));
const getDesigns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listDesigns = yield design_1.default.findAll();
    res.json(listDesigns);
});
exports.getDesigns = getDesigns;
const getDesign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findDesign = yield design_1.default.findByPk(id);
    if (findDesign) {
        res.json(findDesign);
    }
    else {
        res.status(404).json({
            msg: `No esixte el diseño con el id ${id}`
        });
    }
});
exports.getDesign = getDesign;
const postDesign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield design_1.default.create(body);
        res.json({
            msg: 'El diseño fue agregado exitosamente'
        });
    }
    catch (error) {
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        });
    }
});
exports.postDesign = postDesign;
const updateDesign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const findDesign = yield design_1.default.findByPk(id);
    try {
        if (findDesign) {
            yield findDesign.update(body);
            res.json({
                msg: 'El diseño ha sido actualizado exitosamente'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el diseño con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error en la comunicacion'
        });
    }
});
exports.updateDesign = updateDesign;
const deleteDesign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findDesign = yield design_1.default.findByPk(id);
    if (!findDesign) {
        res.json({
            msg: `No existe el diseño con el id ${id}`
        });
    }
    else {
        yield findDesign.destroy();
        res.json({
            msg: `El proyecto con el id ${id} ha sido eliminado exitosamente`
        });
    }
});
exports.deleteDesign = deleteDesign;
