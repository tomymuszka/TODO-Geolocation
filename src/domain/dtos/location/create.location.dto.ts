

export class CreateLocationDto {

    constructor(
        public readonly name:string,
        public readonly direction:string,
        public readonly latitude:number,
        public readonly longitude:number,
        public readonly user_id:string
    ){}

    static create( props: {[key:string]:any}):[string?, CreateLocationDto?]{

        const { name, direction, latitude, longitude, user_id} = props

        if ( !name ) return ['Name is required', undefined]
        if ( !direction ) return ['Direction is required', undefined]
        if ( !latitude ) return ['Latitude is required', undefined]
        if ( !longitude ) return ['Longitude is required', undefined]
        if ( !user_id ) return ['User is required', undefined]

        return [undefined, new CreateLocationDto(name, direction, latitude, longitude, user_id)]

    }
}