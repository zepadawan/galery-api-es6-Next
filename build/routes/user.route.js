
import authorize from '../_middleware/autorize.js';
import express from 'express';
const router = express.Router();

import { getAllUsers, getUserById, loginUser, registerUser, updateUser, deleteUser } from '../controllers/user.controller.js';
router.post('/get', authorize(), getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', authorize(), updateUser);
router.get('/:id', authorize(), getUserById);
router.delete('/:id', authorize(), deleteUser);

export default router;
//# sourceMappingURL=user.route.js.map