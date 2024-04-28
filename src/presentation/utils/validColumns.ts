import { Request } from 'express';
import { findMatchingRows } from "./getByQuery";

export const validColumns = async ( candi:object,req:Request, table:string)=> {

    const keys = Object.keys( candi )

        let result: { [key: string]: boolean } = {};

        Object.keys(req.query).forEach(key => {
          result[key] = keys.includes(key)
        });

        let allTrue = Object.values(result).every(value => value === true);

        if (allTrue) {

          try {

            const find = await findMatchingRows( req, table )

            return find
            
          } catch (error) {
            // const log = new LogEntity({ 
            //   message:`${error}` , 
            //   level: LogSeverityLevel.ALTO
            //  });
      
            // await logger(log)
          }

          
        } else {
            console.log("Algunas columnas no son validas");

            const find = 'Sos un tarado, alguna columna que incluiste no existe'

            return find
        }
    }