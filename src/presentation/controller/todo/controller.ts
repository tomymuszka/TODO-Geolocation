import { Request, Response } from "express"
import { getById, updateById } from "../../utils"
import { create } from '../../utils/create'
import { CreateTodoDto } from "../../../domain/dtos/todo/create.todo.dto"
import { UpdateTodoDto } from "../../../domain/dtos/todo/update.todo.dto"


export class TodoController {

    constructor(
        private readonly table:string='todo'
    ){}

    public getTodo = (req:Request, res:Response) =>{
    
    }

    public getTodoByID = async(req:Request, res:Response) =>{

        const id = +req.params.id!
        const value = await getById(id, this.table)
        if(value) return res.status(200).json(value)
        return res.status(500).json('Internal server error')

    }

    public createTodo = async(req:Request, res:Response) => {

        const [error, createTodoDto] = CreateTodoDto.create(req.body)
        if( error ) return res.status(400).json(error)

        const value = create(createTodoDto!, this.table)
        if(value) return res.status(200).json(value)
        return res.status(500).json('Internal server error')

    }

    public updateTodo = (req:Request, res:Response) => {


    }

    public updateTodoByID = (req:Request, res:Response) => {

        const id = +req.params.id
        const [error, updateTodoDto] = UpdateTodoDto.update({...req.body, id})
        if( error ) return res.status(400).json(error)

        const updatedTodo = updateById(updateTodoDto, this.table)
        if (updatedTodo) return res.status(200).json(updatedTodo)
        return res.status(500).json('Internal server error')
    
    }

    public deleteTodo = (req:Request, res:Response) => {
        
    }
}