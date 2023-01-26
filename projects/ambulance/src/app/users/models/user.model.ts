export class UserModel {
    _id?: string
    username: string
    profile: string
    password: string
    active:boolean
    creationDate?:Date

    constructor(username:string, profile:string, password:string, active:boolean){
        this.username = username
        this.profile = profile
        this.password = password
        this.active = active
    }



}