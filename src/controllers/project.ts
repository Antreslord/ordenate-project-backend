import { Request, Response } from "express";
import project from "../models/project";


export const getProjects = async(req: Request, res: Response) => {
    const listProject = await project.findAll()
    res.json(listProject)
}

export const getProject = async(req: Request, res: Response) =>{
    const { id } = req.params
    const searchProject = await project.findByPk(id)

    if(searchProject){
        res.json(searchProject)
    }else{
        res.status(404).json({
            msg:`No existe el proyecto con el id ${id}`
        })
    }
}


