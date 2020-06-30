import { Router } from 'express';
import StretchingController from '../controllers/StretchingController';

const router = Router();

router.get('/', StretchingController.getAllStretchings);
router.get('/:id', StretchingController.getStretching);
router.post('/', StretchingController.addStretching);
router.put('/:id', StretchingController.updatedStretching);
router.delete('/:id', StretchingController.deleteStretching);

export default router;