import { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUsers } from '../controllers/user.controllers';

const router = Router()

router.post('/users', createUser ) // creacion de usuario

router.get('/users', getUsers) // obtener todos los usuarios 

router.put("/users/:id", updateUsers)

//router.delete("/user/:id", deleteUser)

export default router