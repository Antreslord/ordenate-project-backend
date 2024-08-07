import { Router } from "express";
import { deleteActivity, getActivities, getActivity, postActivity, updateActivity } from "../controllers/activity";

const router = Router(); 

router.get('/', getActivities)
router.get('/:id', getActivity)
router.delete('/:id',deleteActivity)
router.post('/',postActivity)
router.put('/:id', updateActivity)

export default router