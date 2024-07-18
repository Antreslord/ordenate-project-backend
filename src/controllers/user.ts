import { Request, Response } from 'express';
import User from '../models/user'

export const getUsers = async (req: Request, res: Response) =>{
    
    const listUser = await User.findAll()
    res.json(listUser);
}