export class LoginUserModel {
    id?: string;
user:{
    rol?:String;
    username?: String;
    lastName?: String;
    email?: String;
    password?: String;
    cellphone?: String;
}  
    userId?:string;
    isLogged?: boolean = false;
}