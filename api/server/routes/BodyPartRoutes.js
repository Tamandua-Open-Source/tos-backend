import { Router } from 'express';
import BodyPartController from '../controllers/BodyPartController';

const router = Router();

router.get('/', BodyPartController.getAllBodyParts);
router.get('/:id', BodyPartController.getBodyPart);
router.post('/', BodyPartController.addBodyPart);
router.put('/:id', BodyPartController.updatedBodyPart);
router.delete('/:id', BodyPartController.deleteBodyPart);

export default router;