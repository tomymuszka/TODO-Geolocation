import { prisma } from "../../data/postgres"


export const getById = async  ( id:number, table:string) =>{

    try {
        const value = await (prisma as any)[table].findUnique(
          {where:{id}})

        return value

      } catch( error ) {

        // const log = new LogEntity({ 
        //   message:`${error}` , 
        //   level: LogSeverityLevel.ALTO
        //  });

        // await logger(log)

        return  {error}
      }}