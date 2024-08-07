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
exports.deleteProject = exports.updateProject = exports.postProject = exports.getProject = exports.getProjects = void 0;
const project_1 = __importDefault(require("../models/project"));
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProject = yield project_1.default.findAll();
    res.json(listProject);
});
exports.getProjects = getProjects;
const getProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const searchProject = yield project_1.default.findByPk(id);
    if (searchProject) {
        res.json(searchProject);
    }
    else {
        res.status(404).json({
            msg: `No existe el proyecto con el id ${id}`
        });
    }
});
exports.getProject = getProject;
const postProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield project_1.default.create(body);
        res.json({
            msg: 'El Proyecto fue agreagado exitosamente'
        });
    }
    catch (error) {
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        });
    }
});
exports.postProject = postProject;
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const chageProject = yield project_1.default.findByPk(id);
    try {
        if (chageProject) {
            yield chageProject.update(body);
            res.json({
                msg: 'El proyecto ha sido actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el usuario con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error en la conexion'
        });
    }
});
exports.updateProject = updateProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const eliminateProject = yield project_1.default.findByPk(id);
    if (!eliminateProject) {
        res.status(404).json({
            msg: `No existe el proyecto con el id ${id}`
        });
    }
    else {
        yield eliminateProject.destroy();
        res.json({
            msg: `El proyecto con el id ${id} ha sido eliminado exitosamente`
        });
    }
});
exports.deleteProject = deleteProject;
