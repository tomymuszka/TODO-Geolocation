import { prisma } from "../../data/postgres"


export const updateByUUID = async ( dto:any, table:string)=> {

    try {
        const value = await (prisma as any)[table].update({
            where: { uuid: dto!.uuid },
            data: dto!.values
          })
        return value
    } catch (error) {
        console.log({error})

        // const log = new LogEntity({ 
        //     message:`${error}` , 
        //     level: LogSeverityLevel.ALTO
        //    });
  
        //   await logger(log)
    }
}