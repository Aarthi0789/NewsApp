import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:any=''
  constructor(private httpClient: HttpClient) { 
    this.url=environment.apiURL;
  }

  getUsers(){
    return this.httpClient.get(this.url + 'api/users')
  }

  createUser(payload:any){
    return this.httpClient.post(this.url+ `api/creatUser`, payload)
  }
}
