// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { News } from '../News';
// @Injectable({
//   providedIn: 'root'
// })
// export class FavService {
//   constructor(private http: HttpClient, private router: Router) {
//   }
//   addfav(Newsobj:any)
//   {
//     return this.http.post<any>("https://localhost:7035/api/News",Newsobj);
//   }
//   getFavorites(Newsobj:any) {
//     return this.http.get<any>("https://localhost:7035/api/News",Newsobj);
//   }
// }

// fav.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../News';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private baseUrl: string = "https://localhost:7035/api/News";
  bookobj:News=new News();
  username!:string|null;
  constructor(private http: HttpClient) {}
  addfav(newsObj: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, newsObj);
  }
  getFavorites(): Observable<News[]> {
    if(localStorage.getItem("username") !=null)
    {
      this.username=localStorage.getItem("username");
    }
    return this.http.get<News[]>("https://localhost:7035/api/News/"+this.username);
  }
  deletefav(newsobj:any)
  {
    console.log(newsobj);
    return this.http.delete<any>("http://localhost:7035/api/News?username="+newsobj.username+"&title="+newsobj.title);
    
  } 
}
