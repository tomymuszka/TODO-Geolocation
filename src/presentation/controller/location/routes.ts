import { Router } from "express";
import { LocationController } from "./controller";
import { GetLocationValidation } from "../../utils/middlewares/location/getByID";
import { CreateLocationValidation } from "../../utils/middlewares/location/create";
import { PutLocationValidation } from "../../utils/middlewares/location/update";
import { ValidationResult } from "../../utils/middlewares/ValidationResult";


export class LocationRoutes {

    static get Routes():Router {
        const routes = Router()
        const locationController = new LocationController();

        routes.get('/', GetLocationValidation,ValidationResult,locationController.getLocation)
        routes.get('/:id', GetLocationValidation,ValidationResult,locationController.getLocationByID)
        routes.post('/', CreateLocationValidation,ValidationResult,locationController.createLocation)
        routes.put('/', PutLocationValidation,ValidationResult,locationController.updateLocation)
        routes.put('/:id', PutLocationValidation,ValidationResult,locationController.updateLocationByID)
        routes.delete('/', locationController.deleteLocation)

        return routes
    }
}