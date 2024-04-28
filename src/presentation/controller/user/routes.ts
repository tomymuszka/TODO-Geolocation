import { Router } from "express";
import { UserController } from "./controller";
import { GetUserValidation } from "../../utils/middlewares/user/getByID";
import { ValidationResult } from "../../utils/middlewares/ValidationResult";
import { CreateUserValidation } from "../../utils/middlewares/user/create";
import { PutUserValidation } from "../../utils/middlewares/user/update";


export class UserRoutes {

    static get Routes():Router {
        const routes = Router()
        const userController = new UserController();

        routes.get('/', GetUserValidation,ValidationResult,userController.getUser)
        routes.get('/:uuid', GetUserValidation,ValidationResult,userController.getUserByID)
        routes.post('/', CreateUserValidation, ValidationResult,userController.createUser)
        routes.put('/', PutUserValidation,ValidationResult,userController.updateUser)
        routes.put('/:uuid', PutUserValidation,ValidationResult,userController.updateUserByID)
        routes.delete('/', userController.deleteUser)

        return routes
    }
}