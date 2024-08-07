import { Request, Response } from "express";
import activity from '../models/activity'

export const getActivities = async (req:Request, res:Response) => {
    
    const listActivity = await activity.findAll()
    res.json(listActivity)

}

export  const getActivity = async (req:Request, res:Response) => {
    const { id } = req.params
    const findActivity = await activity.findByPk(id)

    if(findActivity){
        res.json(findActivity)
    }else{
        res.status(404).json({
            msg: `No existe la actividad con el id ${id}`
        })
    }
}

export const deleteActivity = async (req: Request, res:Response) => {
    
    const { id } = req.params
    const findActivity = await activity.findByPk(id)
    
    if(!findActivity){
        res.status(404).json({
            msg: `No existe una actividad con el id ${id}`
        })
    }else{
        await findActivity.destroy()
        res.json({
            msg: `El usuario con el id ${id} ha sido eliminado`
        })
    }

}

export const postActivity = async (req:Request, res:Response) => {

    const { body } = req

    try{

        await activity.create(body)
        res.json({
            msg: 'La actividad fue agregada con exito'
        })

    }catch(error){
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        })
    }

}

export const updateActivity = async (req: Request, res: Response) => {

    const { body } = req
    const { id } = req.params

    const findActivity = await activity.findByPk(id)

    try{
        if(findActivity){
         
            await findActivity.update(body)
            res.json({
                msg: `La actividad fue actualizada con exito`
            })
        
        }else{
            res.status(404).json({
                msg: `No existe la actividad con el id ${id}`
            })
        }

    }catch(error){
        console.log(error)
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        })
    }

}

