import { Request, Response } from "express"
import { getById, updateById } from "../../utils"
import { create } from '../../utils/create'
import { CreateUserDto } from "../../../domain/dtos/user/create.user.dto"
import { UpdateUserDto } from "../../../domain/dtos/user/update.user.dto"
import { getByUUID } from "../../utils/getByUUID"
import { updateByUUID } from "../../utils/updateByUUID"

export class UserController {

    constructor(
        private readonly table:string='user'
    ){}

    public getUser = (req:Request, res:Response) =>{
    
    }

    public getUserByID = async(req:Request, res:Response) =>{

        const uuid = req.params.uuid!
        const value = await getByUUID(uuid, this.table)
        if(value) return res.status(200).json(value)
        return res.status(500).json('Internal server error')

    }

    public createUser = async(req:Request, res:Response) => {

        const [error, createUserDto] = CreateUserDto.create(req.body)
        if( error ) return res.status(400).json(error)

        const value = create(createUserDto!, this.table)
        if( value ) return res.status(200).json(value)
        return res.status(500).json('Internal server error')

    }

    public updateUser = (req:Request, res:Response) => {


    }

    public updateUserByID = (req:Request, res:Response) => {

        const uuid = req.params.uuid
        const [error, updateUserDto] = UpdateUserDto.update({...req.body, uuid})
        if( error ) return res.status(400).json(error)

        const updatedUser = updateByUUID(updateUserDto, this.table)
        if(updatedUser) return res.status(200).json(updatedUser)
        return res.status(500).json('Internal server error')
    
    }

    public deleteUser = (req:Request, res:Response) => {
        
    }
}