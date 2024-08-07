import { Router } from "express";
import { deleteDesign, getDesign, getDesigns, postDesign, updateDesign } from "../controllers/design";

const router = Router()

router.get('/', getDesigns)
router.get('/:id',getDesign)
router.delete('/:id',deleteDesign)
router.post('/',postDesign)
router.put('/:id',updateDesign)

export default router