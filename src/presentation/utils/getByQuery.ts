
import { Request } from 'express';
import { prisma } from '../../data/postgres';



export const findMatchingRows = async  ( req:Request, table:string)=> {

    try {
      const matchingRows = await (prisma as any)[table].findMany({
        where: req.query,
      });
  
      return matchingRows;
    } catch (error) {
      console.error(error);

    //   const log = new LogEntity({ 
    //     message:`${error}` , 
    //     level: LogSeverityLevel.ALTO
    //    });

    //   await logger(log)
      
      return [];
    }}

