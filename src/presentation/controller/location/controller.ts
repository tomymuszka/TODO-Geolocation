import { Request, Response } from "express"
import { getById, updateById } from "../../utils"
import { create } from './../../utils/create'
import { CreateLocationDto } from '../../../domain/dtos/location/create.location.dto';
import { UpdateLocationDto } from "../../../domain/dtos/location/update.location.dto";

export class LocationController {

    constructor(
        private readonly table:string='location'
    ){}

    public getLocation = (req:Request, res:Response) =>{
    
    }

    public getLocationByID = async(req:Request, res:Response) =>{

        const id = +req.params.id!
        const value = await getById(id, this.table)
        if(value) return res.status(200).json(value)
        return res.status(500).json('Internal server error')
    }

    public createLocation = async(req:Request, res:Response) => {

        const [error, createLocationDto] = CreateLocationDto.create(req.body)
        if( error ) return res.status(400).json(error)

        const value = create(createLocationDto!, this.table)
        if (value) return res.status(200).json(value)
        return res.status(500).json('Internal server error')
    }

    public updateLocation = (req:Request, res:Response) => {

    }

    public updateLocationByID = (req:Request, res:Response) => {

        const id = +req.params.id
        const [error, updateLocationDto] = UpdateLocationDto.update({...req.body, id})
        if( error ) return res.status(400).json(error)

        const updatedLocation = updateById(updateLocationDto, this.table)
        if(updatedLocation) return res.status(200).json(updatedLocation)

        return res.status(500).json('Internal server error')
    }

    public deleteLocation = (req:Request, res:Response) => {
        
    }
}