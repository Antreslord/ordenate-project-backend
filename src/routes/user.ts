import { Router } from "express";
import { deleteUser, getUsers, postUser, updateUser } from "../controllers/user";
import { getUser } from "../controllers/user";


const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.post('/', postUser),
router.put('/:id', updateUser)

export default router;