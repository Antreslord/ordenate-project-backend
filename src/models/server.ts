import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import routesUser from '../routes/user';
import routesProject from '../routes/project'
import routesActivities from '../routes/activity'
import routesDesign from '../routes/design'
import routesNote from '../routes/note'
import db from '../db/connection'


//clase server
class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();

        //metodo midleswares
        this.midleswares();

        //metodo routes()
        this.routes();

        //conectar con BD
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`La aplicacion esta corriendo en el puerto ${this.port} `)
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response)=>{
            res.json({
                msg: 'API Workin'
            })
        })

        this.app.use('/api/user', routesUser)
        this.app.use('/api/project',routesProject)
        this.app.use('/api/activity', routesActivities)
        this.app.use('/api/design', routesDesign)
        this.app.use('/api/note', routesNote)
    }
    
    midleswares(){
        //parsea el body (.ts -> .JSON)
        this.app.use(express.json())

        //corrige el error de 'cors'
        this.app.use(cors())
    }

    async dbConnect(){
        try{
            await db.authenticate()
            console.log('Base de datos conectada')
        }catch(err){
            console.log(err);
            console.log('Error al conectar con la base de datos')
        }
    }

}

export default Server;