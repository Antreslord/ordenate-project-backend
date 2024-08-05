import { Request, Response } from 'express';
import User from '../models/user'
import user from '../models/user';


export const getUsers = async(req: Request, res: Response) =>{
    
    const listUser = await User.findAll()
    res.json(listUser);
} 

export const getUser = async(req: Request, res: Response) =>{
    const { id } = req.params;
    const user = await User.findByPk(id) 

    if(user){
        res.json(user)
    }else{
        res.status(404).json({
            msg: `No existe el usuario con el id ${id}`
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const user = await User.findByPk(id)

    if(!user){
        res.status(404).json({
            msg: `No existe el usuario con el id ${id}`
        })
    }else{
        await user.destroy();
        res.json({
            msg: `El usuario con el id ${id} ha sido eliminado`
        })
    }

}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req

    try{
        
        await user.create(body);

        res.json({
            msg: `El producto fue agregado con exito`
        })
    }catch(error){
        res.json({
            msg: `Ha ocurrido un error de comunicacion`
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {

    const { body } = req
    const { id } = req.params

    const user = await User.findByPk(id)

    try{
        if(user){
         
            await user.update(body)
            res.json({
                msg: `El usuario fue actualizado con exito`
            })
        
        }else{
            res.status(404).json({
                msg: `No existe el usuario con el id ${id}`
            })
        }

    }catch(error){
        console.log(error)
        res.json({
            msg: 'Ha ocurrido un error de comunicacion'
        })
    }

}