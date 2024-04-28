import { prisma } from "../../data/postgres"


export const getByUUID = async  ( uuid:string, table:string) =>{

    try {
        const value = await (prisma as any)[table].findUnique(
          {where:{uuid}})

        return value

      } catch( error ) {

        // const log = new LogEntity({ 
        //   message:`${error}` , 
        //   level: LogSeverityLevel.ALTO
        //  });

        // await logger(log)

        return  {error}
      }}