import { Request, Response } from 'express'
import { User } from '../entities/user'
import { captureRejectionSymbol } from 'events'
import { error } from 'console'
import { parse } from 'path'
import { isDeepStrictEqual } from 'util'

export const createUser = async (req: Request, res: Response) => {

    try {
        const { identification, comment } = req.body
        //throw new Error('Lo sentimos ocurrió un error')

        const user = new User()

        user.identification = identification
        //user.comment = comment
        user.comment= comment

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
        return res.json([users])
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export const updateUsers = async (req: Request, res: Response) => {

    const user = await User.findOneBy({ id: parseInt(req.params.id) })

    const { id } = req.params

    try{
        const user = await User.findOneBy({id: parseInt(id)})
    if (!user) return res.status(404).json({ message: "el usuario no exite" })

    await User.update({id:parseInt(id)}, req.body)

    return res.sendStatus(204)//.json({message: "usuario modificado"})
    }
    catch (error){
        if(error){
            return res.status(500).json({message: error})
        }
    }
}