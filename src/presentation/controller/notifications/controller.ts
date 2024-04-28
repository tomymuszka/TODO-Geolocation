// import { Request, Response } from "express"
// import { getById, updateById } from "../../utils"
// import { create } from '../../utils/create'

// export class NotificationController {

//     constructor(
//         private readonly table:string='notification'
//     ){}

//     public getNotification = (req:Request, res:Response) =>{
    
//     }

//     public getNotificationByID = async(req:Request, res:Response) =>{

//         const id = +req.params.id!
//         const value = await getById(id, this.table)
//         return res.status(200).json(value)

//     }

//     public createNotification = async(req:Request, res:Response) => {

//         const [error, createNotificationDto] = CreateNotificationDto.create(req.body)
//         if( error ) return res.status(400).json(error)

//         const value = create(createNotificationDto!, this.table)
//         return res.status(200).json(value)

//     }

//     public updateNotification = (req:Request, res:Response) => {


//     }

//     public updateNotificationByID = (req:Request, res:Response) => {

//         const id = +req.params.id
//         const [error, updateNotificationDto] = UpdateNotificationDto.update({...req.body, id})
//         if( error ) return res.status(400).json(error)

//         const updatedNotification = updateById(updateNotificationDto, this.table)
//         return res.status(200).json(updatedNotification)
    
//     }

//     public deleteNotification = (req:Request, res:Response) => {
        
//     }
// }