

export class UpdateUserDto {

    constructor(
        public readonly uuid:string,
        public readonly name:string,
        public readonly email:string
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if( this.uuid ) returnObj.uuid=this.uuid
        if(this.name) returnObj.name=this.name
        if(this.email) returnObj.email=this.email

        return returnObj
    }

    static update( props: {[key:string]:any}):[string?, UpdateUserDto?]{

        const {uuid, name, email} = props

        if(uuid==='') return ['UUid can not be empty', undefined]
        if(name==='') return ['Name can not be empty', undefined]
        if(email==='') return ['Email can not be empty', undefined]

        return [undefined, new UpdateUserDto(uuid, name, email)]
    }
}