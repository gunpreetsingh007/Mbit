import { FetchService } from './fetch.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private fetch: FetchService , private route: Router){}
  canActivate(): boolean
  {

    return true;
  //   if(this.fetch.returnStatus())
  //   {
  //     return true;
  //   }
  //   else
  //   {
  //     this.route.navigate(['/admin']);
  //     return false;
  //   }
  // }
  
}
}
