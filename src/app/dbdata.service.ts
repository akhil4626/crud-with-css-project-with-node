import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbdataService {

  constructor(private http:HttpClient) { }
  retreiveurl = "http://localhost:3000/api/search";
  deleteurl="http://localhost:3000/delete"
  createurl="http://localhost:3000/post"
  updateurl="http://localhost:3000/update"
  getDataFromDb(){
  return this.http.get(this.retreiveurl)
    }
  deleteFromDb(id:any){
    return this.http.post<any>(this.deleteurl, id);
  }
  createDataInDb(names: string, email: string, PhoneNumber: any, Address: string){
    return this.http.post<any>(this.createurl, { names, email, PhoneNumber, Address });
  }
  updateDataInDb(id: any, names: string, email: string, PhoneNumber: any, Address: string){
    return this.http.post<any>(this.updateurl, { id, names, email, PhoneNumber, Address });

  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class DbdataService {

//   constructor(private http:HttpClient) { }
//   retreiveurl = "http://localhost:3000/api/search";
//   deleteurl="http://localhost:3000/delete"
//   createurl="http://localhost:3000/post"
//   updateurl="http://localhost:3000/update"
//   getDataFromDb(){
//   return this.http.get(this.retreiveurl)
//     }
//   deleteFromDb(id:any){
//     return this.http.post<any>(this.deleteurl, id);
//   }
//   createDataInDb(body:any){
//     return this.http.post<any>(this.createurl, body);
//   }
//   updateDataInDb(body:any){
//     return this.http.post<any>(this.updateurl, body);

//   }
// }