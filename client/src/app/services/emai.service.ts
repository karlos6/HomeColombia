import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmaiService {

  headers: HttpHeaders = new HttpHeaders({"content-type": "application/json"});

  constructor( private http: HttpClient) { }

  /* envio de emai a traves del loopback api funcion get del loginUser */
  sendEmai(m: String,s: String, c:String):Observable<any>{   

    const url = `http://localhost:3000/api/LoginUsers/sendEmail?message=${m}&subject=${s}&emailAddresses=${c}`

    return this.http.get(url);
  }

  validTokenEmail(id:String):Observable<any>{
    const url = `http://localhost:3000/api/Users/${id}/verify`    

    return this.http.post(url,{headers: this.headers});
  }

  



  
}
