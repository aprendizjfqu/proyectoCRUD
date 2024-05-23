import { Router } from 'express';
import { createUser, deleteUser, getUsers, getUsersByPersonaId, updateUsers } from '../controllers/user.controllers';

const router = Router()

router.post('/pqrs', createUser ) // creacion de usuario

router.get('/pqrs', getUsers) // obtener todos los usuarios 

router.put("/pqrs/:id", updateUsers)

router.get("/pqrs/:personaId", getUsersByPersonaId)

//router.delete("/user/:id", deleteUser)

export default router