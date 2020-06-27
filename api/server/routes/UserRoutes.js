import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/login', UserController.signInUser);

router.get('/', UserController.verifyToken, UserController.getAllUsers);
router.get('/:id', UserController.getUser);
router.post('/', UserController.addUser);
router.put('/:id', UserController.updatedUser);
router.delete('/:id', UserController.deleteUser);

export default router;