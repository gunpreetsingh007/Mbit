import { FetchService } from './../fetch.service';
import { Component, OnInit, NgModule } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FoodItems} from './fooditem';
 
var tableno:number;
var checkedFood: FoodItems[]=[];
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  private our: number;
  private mix: string;
  private ourFood: FoodItems[] = [];
  public capturedid: number[]=[];
  public restaurant: string;
  private length: boolean = true;
 
  constructor(private route: ActivatedRoute , private route2: Router,  private _foodservice: FetchService)  { }

  ngOnInit() {
   this.displayRestName();
   this._foodservice.getFood().subscribe( (data: FoodItems[]) => {
   this.ourFood = data;
   })

  }

 displayRestName(){
  
    let restaurantIndex: number = parseInt(this.route.snapshot.paramMap.get('index'));
    let lol: string= this.route.snapshot.paramMap.get('tokengen');
    tableno = parseInt( lol[lol.length-1]);
    this.mix= restaurantIndex + lol;
  
    switch(restaurantIndex)
    {
      case 1:
        {
          this.restaurant = "MIET Restaurant";
      
          break;
        }
      case 2:
        {
          this.restaurant = "Punjabi Restaurant";
         
          break;
        }
          
        
      case 3:
        {
          this.restaurant = "Kashmiri Restaurant";
         
          break;
        }
          
        
        default:
          {
               this.route2.navigate(["**"]);
          }
    }
  }

  captureid(x ,y: number)
  {
   if(x.viewModel == false)
   {
     this.capturedid.push(y);
   }

   else
   {
     for(let i=0; i<this.capturedid.length; i++)
     {
       if(y == this.capturedid[i])
       {
          this.capturedid.splice(i, 1);
          i--;
       }
     }
   }
   
   
  }

  checkout()
  {
for(var i=0 ; i < this.capturedid.length; i++)
  {
for(var j=0 ; j < this.ourFood.length; j++)
{
if(this.capturedid[i] == this.ourFood[j]["id"] )
{
  checkedFood.push(this.ourFood[j]);
}

}    
     this.our = checkedFood.length;
  }
    if(checkedFood.length == 0)
    {
      this.length = false ;
    }

    else
    {
      this.length = true ;
    }
  }
  thenNavigate(x: string,y: number)
  {
if(this.length)
{
    this.route2.navigate(['/inventory/checkout',x,y]);

}
  }
  returnCheckedFood(): FoodItems[]
  {
    return checkedFood;
  }
  returntable(){
    return tableno;
   
  }

}
