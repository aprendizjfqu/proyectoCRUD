import { Request, Response } from 'express'
import { User } from '../entities/user'

interface userBody {
    personaId: number
    comparendo: number
    mensaje: string
}

export const createUser = async (req: Request<unknown, unknown, userBody>, res: Response) => {

    try {
        const { personaId, mensaje } = req.body
        //throw new Error('Lo sentimos ocurrió un error')

        const user = new User()

        user.personaId = personaId
        user.mensaje = mensaje

        await user.save()

        return res.json(user)
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export const getUsers = async (req: Request, res: Response) => {

    try {
        //throw new Error('ups ocurrio un problema con el servidor, lo estamos solucionando')
        const users = await User.find()
        // return res.json([users])
        return res.json(users)
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export const updateUsers = async (req: Request, res: Response) => {

    const { id } = req.params

    try {
        console.log(id)
        const user = await User.findOneBy({ id: parseInt(id) })
        if (!user) return res.status(404).json({ message: "el usuario no exite" })

        await User.update({ id: parseInt(id) }, req.body)

        return res.sendStatus(204)//.json({message: "usuario modificado"})
    }
    catch (error) {
        if (error) {
            return res.status(500).json({ message: error })
        }
    }
}

export const getUsersByPersonaId = async (req: Request, res: Response) => {

    try {
        const { personaId } = req.params
        const users = await User.findBy({ personaId: parseInt(personaId) })
        // return res.json([users])
        return res.json(users)
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {

        const result = await User.delete({ id: parseInt(id) })

        if (result.affected === 0)

            return res.status(404).json({ message: "usuario no encontrado" })

        return res.sendStatus(204);
    }
    catch (error) {

        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }


    }
}