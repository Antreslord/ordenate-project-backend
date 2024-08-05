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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("../routes/user"));
const project_1 = __importDefault(require("../routes/project"));
const connection_1 = __importDefault(require("../db/connection"));
//clase server
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        //metodo midleswares
        this.midleswares();
        //metodo routes()
        this.routes();
        //conectar con BD
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`La aplicacion esta corriendo en el puerto ${this.port} `);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Workin'
            });
        });
        this.app.use('/api/user', user_1.default);
        this.app.use('/api/project', project_1.default);
    }
    midleswares() {
        //parsea el body (.ts -> .JSON)
        this.app.use(express_1.default.json());
        //corrige el error de 'cors'
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (err) {
                console.log(err);
                console.log('Error al conectar con la base de datos');
            }
        });
    }
}
exports.default = Server;
