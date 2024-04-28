

export class CreateTodoDto {

    constructor(
        public readonly text:string,
        public readonly completed:boolean,
        public readonly location_id:number,
        public readonly user_id:number,
    ){}

    static create( props: {[key:string]:any}):[string?, CreateTodoDto?]{

        const {text, completed, location_id, user_id} = props

        if( !text ) return ['Text is required', undefined]
        if( !location_id ) return ['Completed is required', undefined]
        if( !user_id ) return ['User is required', undefined]

        return [undefined, new CreateTodoDto(text, completed, location_id, user_id)]

    }
}