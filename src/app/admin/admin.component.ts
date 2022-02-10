import { adminModel } from './../admin';
import { Router } from '@angular/router';
import { FetchService } from './../fetch.service';
import { OnInit, Component } from '@angular/core';

var selectedUser: adminModel = { "username": "", "password": "" , "uniqueId": "" , "displayName": "" }

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {


  private ourAdmin: adminModel[];
  private username: string;
  private password: string;
  private showSpan: boolean = true ;

  constructor(private getAdmin: FetchService , private route: Router) { }

  ngOnInit() {

    this.getAdmin.getAdmin().subscribe( (data: adminModel[]) => {
      this.ourAdmin = data;
      })
  }

  checklogin( x: string  ,  y: string)
  {  
    for( var i = 0; i < this.ourAdmin.length ; i++ )
    {  
      var temp = 0;
      if(this.username == this.ourAdmin[i]["username"] && this.password == this.ourAdmin[i]["password"] )
      {
            this.showSpan = true ; 
            temp = 1 ;
            selectedUser = this.ourAdmin[i];
            this.getAdmin.isloggedin(this.ourAdmin[i]["uniqueId"]);
          this.route.navigate(['/admin/dashboard']);
          break;
      }
    }
    if(temp == 0)
    {
      this.showSpan = false;
    }

    }
    
     returnUser(): adminModel
     {
       return selectedUser;
     }

  }


  


