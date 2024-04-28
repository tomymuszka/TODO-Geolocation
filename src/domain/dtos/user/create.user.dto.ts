import { v4 as uuidv4 } from 'uuid';


export class CreateUserDto {

    constructor(
        public readonly uuid:string,
        public readonly name:string,
        public readonly email:string,
    ) {}

    static create( props: {[key:string]:any}):[string?, CreateUserDto?]{

        const{name, email} = props

        if(!name) return['Name is required', undefined]
        if(!email) return['Email is required', undefined]
        const uuid = uuidv4()


        return [ undefined, new CreateUserDto(uuid,name, email)]
    }
}