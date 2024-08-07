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

export const postProject = async (req: Request, res: Response) => {

    const { body } = req

    try{
        await project.create(body)

        res.json({
            msg: 'El Proyecto fue agreagado exitosamente'
        })
    }catch(error){
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        })
    }

}

export const updateProject = async (req: Request, res: Response) =>{
    const { body } = req
    const { id } = req.params

    const chageProject = await project.findByPk(id)

    try{
        if(chageProject){
            await chageProject.update(body)
            res.json({
                msg: 'El proyecto ha sido actualizado con exito'
            })
        }else{
            res.status(404).json({
                msg: `No existe el usuario con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg: 'Ha ocurrido un error en la conexion'
        })
    }
}

export const deleteProject = async (req: Request, res: Response) => {

    const { id } = req.params
    const eliminateProject = await project.findByPk(id)

    if(!eliminateProject){
        res.status(404).json({
            msg: `No existe el proyecto con el id ${id}`
        })
    }else{
        await eliminateProject.destroy()
        res.json({
            msg: `El proyecto con el id ${id} ha sido eliminado exitosamente`
        })
    }

}




