export class UserModel{
    id?: string;
    user:{username: String;
        secondName: String;
        firstLastName: String;
        secondLastName: String;
        email: String;
        password: String;
        birthDate: String;
        address: String;
        cellphone: String;}
    
    isLogged: boolean = false;
}