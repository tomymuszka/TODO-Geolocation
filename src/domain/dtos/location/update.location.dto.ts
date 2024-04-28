

export class UpdateLocationDto {

    constructor(
        public readonly id:number,
        public readonly name:string,
        public readonly direction:string,
        public readonly latitude:number,
        public readonly longitude:number,
        public readonly user_id:string,
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if ( this.id ) returnObj.id = this.id
        if ( this.name ) returnObj.name = this.name
        if ( this.direction ) returnObj.direction = this.direction
        if ( this.latitude ) returnObj.latitude = this.latitude
        if ( this.longitude ) returnObj.longitude = this.longitude
        if ( this.user_id ) returnObj.user_id = this.user_id

        return returnObj

    }

    static update( props: {[key:string]:any}):[string?, UpdateLocationDto?]{

        const { id, name, direction, longitude, latitude, user_id} = props

        if(name==='') return ['Name can not be empty', undefined]
        if(direction==='') return ['Direction can not be empty', undefined]
        if(latitude==='') return ['Latitude can not be empty', undefined]
        if(longitude==='') return ['Longitude can not be empty', undefined]
        if(user_id==='') return ['User can not be empty', undefined]

        return [undefined, new UpdateLocationDto(id, name, direction, latitude, longitude, user_id)]
    }
}