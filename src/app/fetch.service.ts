import { selectedTable } from './admin/admin-dashboard/notification-bar/table';
import { FoodItems } from './inventory/fooditem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import  {adminModel} from './admin';

const headerOptions = {

  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
var loginstatus: boolean;
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private _url:string = "http://localhost:3600/FoodItems";
  private _urlnotify: string = "http://localhost:3000/DBnotify";
  private _urlanalytics: string = "http://localhost:2000/DataAnalytics";
 
  private admin:string = "/assets/database-admin.json";
  private ourAdmins: string[] = ["RxGHUijndsfidsnskdfkd" , "QCNkmaddsSADU(Afdfddfods" , "KBDSAFndfdjfFDJIDJDFskdf"] ;

  constructor(private http: HttpClient) { }

  getFood(): Observable<FoodItems[]>
  {
     return this.http.get<FoodItems[]>(this._url  );
  }

  getAdmin(): Observable<adminModel[]>
  {
    return this.http.get<adminModel[]>(this.admin);
  }
  updateinventory(x: FoodItems): Observable<FoodItems>
  {
  
    return this.http.put<FoodItems>(this._url + '/'+ x.id, x );
      

  }

  postNotify(x: selectedTable): Observable<selectedTable>
  {

 return this.http.post<selectedTable>(this._urlnotify , x);
  }

  getNotify(): Observable<selectedTable[]>
  {
     return this.http.get<selectedTable[]>(this._urlnotify);
  }
  
 isloggedin( x: string)
 {  let temp= 0;
   for(let i=0 ; i< this.ourAdmins.length ; i++)
   {
 if( this.ourAdmins[i] == x)
 {
   loginstatus = true ;
   temp = 1;
 }
   }
 if(temp == 0)
 {
   loginstatus = false;
 }
 }
 returnStatus()
 {
   return loginstatus;
 }

 postDataAnalytics(x: selectedTable): Observable<selectedTable>
 {

return this.http.post<selectedTable>(this._urlanalytics , x);
 }
 deletenotify(x:number): Observable<selectedTable>
 {
   return this.http.delete<selectedTable>(this._urlnotify + '/' + x);
 }
 appendList(x: FoodItems): Observable<FoodItems>              //appending the food item in edit inventory
 {

return this.http.post<FoodItems>(this._url , x  );
 }

 deleteFood(x:number): Observable<FoodItems>
 {
   return this.http.delete<FoodItems>(this._url + '/' + x ); 
 }

 updateALL(x: FoodItems): Observable<FoodItems>
 {
   return this.http.put<FoodItems>(this._url +  '/' + x.id , x);
 }
 
}
