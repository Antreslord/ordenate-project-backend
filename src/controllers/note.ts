import { Request, Response } from "express";
import note from "../models/note";

export const getNotes = async (req: Request, res:Response) => {
    const listNotes = await note.findAll()

    if(listNotes){
        res.json(listNotes)
    }
} 

export const getNote = async (req: Request, res:Response) => {
    const { id } = req.params
    const findNote = await note.findByPk(id)

    if(findNote){
        res.json(findNote)
    }else{
        res.status(404).json({
            msg: `No existe una nota con el id ${id}`
        })
    }
}

export const deleteNote = async (req: Request, res:Response) => {
    const { id } = req.params
    const findNote = await note.findByPk(id)

    if(!findNote){
        res.status(404).json({
            msg: `No existe la nota con el id ${id}`
        })
    }else{
        await findNote.destroy()
        res.json({
            msg: `La nota con el id ${id} ha sido elimanda exitosamente`
        })
    }
}

export const postNote = async (req: Request, res:Response) => {
    const { body } = req
    
    try{
        await note.create(body)
        res.json({
            msg: 'La nota ha sido agreagada exitosamente'
        })
    }catch(error){
        res.json({
            msg: 'Ha ocurrido un error en la comunicacion'
        })
    }
}

export const updateNote = async (req: Request, res:Response) => {
    const { body } = req
    const { id } = req.params

    const findNote = await note.findByPk(id)
    
    try{
        if(findNote){
            await findNote.update(body)
            res.json({
                msg: 'La nota ha sido actualizada exitosamente'
            })
        }else{
            res.status(404).json({
                msg: `No existe una nota con el id ${id}`
            })
        }
    }catch(error){
        console.log(error)
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        })
    }
}