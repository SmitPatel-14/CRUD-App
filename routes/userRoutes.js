import express from 'express';
import { createUser ,deleteUser,getUser,updateUser} from '../controller/userController.js';

const router = express.Router();

router.post('/createUser',createUser)
router.get('/getUser',getUser)
router.put('/updateUser',updateUser)
router.delete('/deleteUser/:id',deleteUser)

export default router;