import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmaiService {

  constructor( private http: HttpClient) { }

  /* envio de emai a traves del loopback api funcion get del loginUser */
  sendEmai(m: String,s: String, c:String):Observable<any>{   

    const url = `http://localhost:3000/api/LoginUsers/sendEmail?message=${m}&subject=${s}&emailAddresses=${c}`

    return this.http.get(url);
  }


  
}
