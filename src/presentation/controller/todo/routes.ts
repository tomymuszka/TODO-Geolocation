import { Router } from "express";
import { TodoController } from "./controller";
import { GetTodoValidation } from "../../utils/middlewares/todo/getByID";
import { validationResult } from "express-validator";
import { ValidationResult } from "../../utils/middlewares/ValidationResult";
import { CreateTodoValidation } from "../../utils/middlewares/todo/create";
import { PutTodoValidation } from "../../utils/middlewares/todo/update";


export class TodoRoutes {

    static get Routes():Router {
        const routes = Router()
        const todoController = new TodoController();

        routes.get('/', GetTodoValidation,validationResult,todoController.getTodo)
        routes.get('/:id', GetTodoValidation,ValidationResult,todoController.getTodoByID)
        routes.post('/', CreateTodoValidation,ValidationResult,todoController.createTodo)
        routes.put('/', PutTodoValidation, ValidationResult,todoController.updateTodo)
        routes.put('/:id', PutTodoValidation,ValidationResult,todoController.updateTodoByID)
        routes.delete('/', todoController.deleteTodo)

        return routes
    }
}