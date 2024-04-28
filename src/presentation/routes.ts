import { Router } from "express";
import { LocationRoutes } from "./controller/location/routes";
import { TodoRoutes } from "./controller/todo/routes";
import { UserRoutes } from "./controller/user/routes";


export class AppRoutes {

    static get routes():Router {

        const routes=Router()

        routes.use('/rest/v1/location', LocationRoutes.Routes)
        routes.use('/rest/v1/todo', TodoRoutes.Routes)
        routes.use('/rest/v1/user', UserRoutes.Routes)

        return routes

    }

    
}