import { prisma } from "../../data/postgres"


export const create = async  ( dto:any, table:string) =>{

    try {
        const value = await (prisma as any)[table].create( {data: dto!})
        return value
    } catch (error) {
        console.log({error})

        // const log = new LogEntity({ 
        //     message:`${error}` , 
        //     level: LogSeverityLevel.ALTO
        //    });
  
          //await logger(log)

          return {error}
    }
}
