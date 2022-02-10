import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
private tokenlistMIET=[
  "1-csedept-01",
  "1-csedept-02",
  "1-csedept-03",
  "1-csedept-04",
  "1-csedept-05"
]
private tokenlistPUNJABI=[
  "2-csedept-01",
  "2-csedept-02",
  "2-csedept-03",
  "2-csedept-04",
  "2-csedept-05"
]
private tokenlistKASHMIRI=[
  "3-csedept-01",
  "3-csedept-02",
  "3-csedept-03",
  "3-csedept-04",
  "3-csedept-05"
]
private tokenSpan = true;
private currentRestaurant: string;
private currentToken: string;
public tokengen: string;
private index: number;
constructor(private router: Router){}

verification(tokenno: string)
{
 if( tokenno=="")
 {
 this.tokenSpan = false;
 
 }
 else if(tokenno[0] == "1")
  {
   
 for(let token of this.tokenlistMIET)
 {
   
   if(<string>token!=<string>tokenno)
   {
     this.tokenSpan = false;
   }
   else{
     this.tokenSpan = true;
     this.currentRestaurant = "miet";
     this.currentToken = token;
     this.index = 1; 
     break;
   }
   
 }
  }
else if(tokenno[0] == "2")
{
  
  for(let token of this.tokenlistPUNJABI)
  {
    if(<string>token!=<string>tokenno)
    {
      this.tokenSpan = false;
    }
    else{
      this.tokenSpan = true;
      this.currentRestaurant = "punj";
      this.currentToken = token;
      this.index = 2; 
      break;
    }
    
  }
}
else if(tokenno[0] == "3")
{
  for(let token of this.tokenlistKASHMIRI)
  {
    if(<string>token!=<string>tokenno)
    {
      this.tokenSpan = false;
    }
    else{
      this.tokenSpan = true;
      this.currentRestaurant = "kash";
      this.currentToken = token;
      this.index = 3; 
      break;
    }
    
  }
}
else
{
  this.tokenSpan = false ;
}

}

proceed(index, currentRestaurant,currentToken)
{
if(this.tokenSpan == true)
{
this.router.navigate(['/inventory',index ,currentRestaurant + currentToken])
}

}

}
