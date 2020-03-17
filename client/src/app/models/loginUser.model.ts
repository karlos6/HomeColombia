export class LoginUserModel {
  [x: string]: any;
    id?: string;
user:{
    rol?:string;
    id?: string;
    username?: String;
    lastName?: String;
    email?: String;
    password?: String;
    cellphone?: String;
    status?:boolean;
}  
    userId?:string;
    isLogged?: boolean = false;
}