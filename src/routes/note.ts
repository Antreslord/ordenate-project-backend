import { Router } from "express";
import { deleteNote, getNote, getNotes, postNote, updateNote } from "../controllers/note";

const router = Router()

router.get('/', getNotes)
router.get('/:id', getNote)
router.delete('/:id', deleteNote)
router.post('/', postNote)
router.put('/:id', updateNote)

export default router