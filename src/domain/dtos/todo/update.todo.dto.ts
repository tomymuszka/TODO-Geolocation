

export class UpdateTodoDto {

    constructor(
        public readonly id:number,
        public readonly text:string,
        public readonly completed:string,
        public readonly location_id:number,
        public readonly user_id:number,

  
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if ( this.id ) returnObj.id = this.id
        if ( this.text ) returnObj.text = this.text
        if ( this.completed ) returnObj.completed = this.completed
        if ( this.location_id ) returnObj.location_id = this.location_id
        if ( this.user_id ) returnObj.user_id = this.user_id

        return returnObj
    }

    static update( props: {[key:string]:any}):[string?, UpdateTodoDto?]{

        const { id, text, completed, location_id, user_id} = props

        if(text==='') return ['text can not be empty', undefined]
        if(location_id==='') return ['location_id can not be empty', undefined]
        if(user_id==='') return ['user_id can not be empty', undefined]

        return [undefined, new UpdateTodoDto(id, text, completed,location_id, user_id)]
    }
}