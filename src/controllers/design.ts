import { Request, Response } from "express";
import design from "../models/design";

export const getDesigns = async(req: Request, res:Response) => {
    const listDesigns = await design.findAll()

    res.json(listDesigns)
}

export const getDesign = async(req: Request, res:Response) => {
    const { id } = req.params
    const findDesign = await design.findByPk(id)

    if(findDesign){
        res.json(findDesign)
    }else{
        res.status(404).json({
            msg: `No esixte el diseño con el id ${id}`
        })
    }
}

export const postDesign = async(req: Request, res:Response) => {

    const { body } = req

    try{
        await design.create(body)

        res.json({
            msg: 'El diseño fue agregado exitosamente'
        })
    }catch(error){
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        })
    }

}

export const updateDesign = async(req: Request, res:Response) => {
    const { id } = req.params
    const { body } = req

    const findDesign = await design.findByPk(id)

    try{
        if(findDesign){
            await findDesign.update(body)
            res.json({
                msg: 'El diseño ha sido actualizado exitosamente'
            })
        }else{
            res.status(404).json({
                msg: `No existe el diseño con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg: 'Ha ocurrido un error en la comunicacion'
        })
    }
}

export const deleteDesign = async(req: Request, res:Response) => {
    const { id } = req.params
    const findDesign = await design.findByPk(id)

    if(!findDesign) {
        res.json({
            msg: `No existe el diseño con el id ${id}`
        })
    }else{
        await findDesign.destroy()
        res.json({
            msg: `El proyecto con el id ${id} ha sido eliminado exitosamente`
        })
    }
}