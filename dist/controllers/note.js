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
exports.updateNote = exports.postNote = exports.deleteNote = exports.getNote = exports.getNotes = void 0;
const note_1 = __importDefault(require("../models/note"));
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listNotes = yield note_1.default.findAll();
    if (listNotes) {
        res.json(listNotes);
    }
});
exports.getNotes = getNotes;
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findNote = yield note_1.default.findByPk(id);
    if (findNote) {
        res.json(findNote);
    }
    else {
        res.status(404).json({
            msg: `No existe una nota con el id ${id}`
        });
    }
});
exports.getNote = getNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findNote = yield note_1.default.findByPk(id);
    if (!findNote) {
        res.status(404).json({
            msg: `No existe la nota con el id ${id}`
        });
    }
    else {
        yield findNote.destroy();
        res.json({
            msg: `La nota con el id ${id} ha sido elimanda exitosamente`
        });
    }
});
exports.deleteNote = deleteNote;
const postNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield note_1.default.create(body);
        res.json({
            msg: 'La nota ha sido agreagada exitosamente'
        });
    }
    catch (error) {
        res.json({
            msg: 'Ha ocurrido un error en la comunicacion'
        });
    }
});
exports.postNote = postNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const findNote = yield note_1.default.findByPk(id);
    try {
        if (findNote) {
            yield findNote.update(body);
            res.json({
                msg: 'La nota ha sido actualizada exitosamente'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una nota con el id ${id}`
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
exports.updateNote = updateNote;
