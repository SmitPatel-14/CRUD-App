import express from 'express';
import { createUser ,deleteUser,getUser,updateUser} from '../controller/userController.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/users/createUser:
 *   post:
 *     summary: Create user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *               intrest:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */
router.post('/createUser',createUser)

/**
 * @swagger
 * /api/v1/users/getUser:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */

router.get('/getUser',getUser)

/**
 * @swagger
 * /api/v1/users/updateUser:
 *   put:
 *     summary: Update user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *               intrest:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put('/updateUser',updateUser)

/**
 * @swagger
 * /api/v1/users/deleteUser/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/deleteUser/:id',deleteUser)

export default router;