export class UserModel {
    rol?:string;
    id?: string;
    username?: String;
    lastName?: String;
    email?: String;
    password?: String;
    cellphone?: String;
    isLogged?: boolean = false;
    status?:boolean;
}