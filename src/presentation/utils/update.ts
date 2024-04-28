
import { Request } from 'express';
import { prisma } from '../../data/postgres';


export const updateMatchingRows = async  ( req:Request, table:string)=> {

    try { 

        const updatedValue = await (prisma as any)[table].updateMany({
          where: {...req.query},
          data: req.body,
        });

        return updatedValue
      }catch (error) {

      console.error(error);

    //   const log = new LogEntity({ 
    //     message:`${error}` , 
    //     level: LogSeverityLevel.ALTO
    //    });

    //   await logger(log)

      return [];
    }}