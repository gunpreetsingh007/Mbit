import { selectedTable } from './../../admin/admin-dashboard/notification-bar/table';
import { FetchService } from './../../fetch.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodItems } from './../fooditem';
import { InventoryComponent } from './../inventory.component';
import { Component, OnInit, Input } from '@angular/core';

var i=0;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

   private ourFood2: FoodItems[];
   private totalcost: number;
   private qty: number = 1;
   private str: string = "thanks";
   private mix2: string;
   private our2: number;
   private defaultlol: number[] = [];
   private resetvalues: number[] = [];
   private selectedtable: number;
   private objcreation: selectedTable ={"id": null , "tableno": null , "fooditem": [""] ,"quantity": [] , "time": "" };
  constructor(private check: InventoryComponent, private route4: Router , private route5: ActivatedRoute , private fetch: FetchService ) { }

  ngOnInit() {
           this.ourFood2  =this.check.returnCheckedFood();
           this.selectedtable=this.check.returntable();
           this.calcost();
           this.mix2=this.route5.snapshot.paramMap.get('mix');
           this.our2=parseInt(this.route5.snapshot.paramMap.get('our'));
           for(let i=0 ; i < this.ourFood2.length ; i++)
           {
                
                 this.resetvalues.push(this.ourFood2[i]["available"]);
                 --this.ourFood2[i]["available"]; 
                 this.ourFood2[i]["index"] = i;
                 this.defaultlol.push(1);
           }
           
      }

      calcost()
      { 
        var temp: number = 0;
       for( let i=0 ; i< this.ourFood2.length; i++)
       {
          temp +=((parseInt(this.ourFood2[i]["price"]) )* this.ourFood2[i]["quantity"]);
       }
       this.totalcost = temp;
      }

      filterList(x: number)
      {
      this.ourFood2 = this.ourFood2.filter(item => item.id != x  );

      }
      qtyFunc(x , y:number ,z: number) 
      {  
         this.qty = x.viewModel ; 
        
       if(x.viewModel == 1)
         {
        this.ourFood2[z]["available"] = this.resetvalues[z] - 1; 
        this.defaultlol[z] = 1 ;
         }
         else if ( this.defaultlol[z] < x.viewModel  && x.viewModel <= this.resetvalues[z])
         {
             this.ourFood2[z]["available"] = this.resetvalues[z] - x.viewModel;
             this.defaultlol[z] = x.viewModel ;
             for(let i=0 ; i < this.ourFood2.length ; i++)
             {
               if( y == this.ourFood2[i]["id"])
               {
                 this.ourFood2[i]["quantity"] = this.qty ; 
               }
             }
           }
           else if ( this.defaultlol[z] > x.viewModel)
           {  
             let diff = this.defaultlol[z] - x.viewModel ; 
             this.ourFood2[z]["available"] = this.ourFood2[z]["available"] + diff;
             this.defaultlol[z] = x.viewModel;
             for(let i=0 ; i < this.ourFood2.length ; i++)
             {
               if( y == this.ourFood2[i]["id"])
               {
                 this.ourFood2[i]["quantity"] = this.qty ; 
               }
             }
           }
         
      
        
      }
      
      LOLfuncs(x: string , y: number , z: string)
      {
        this.route4.navigate(['/inventory/checkout' , x , y , z ]);
      }

      resetavailable( x: number)
      {
        for(let i=0 ; i < this.ourFood2.length ; i++)
        {
          if( x == this.ourFood2[i]["id"])
          {
            this.ourFood2[i]["available"] = this.resetvalues[i];
          }
        }
      }

      modifyDB(X: FoodItems[])
      {
     for(let i=0 ; i< X.length ; i++)
     { 
       X[i]["quantity"] = 1 ;
       this.fetch.updateinventory(X[i]).subscribe();
     }
      }
     
      giveData(x: FoodItems[] , y: number){
       
        this.objcreation["tableno"] = y;
        this.objcreation["id"] = i;
    for( let j=0 ; j< x.length ; j++)
    {
       this.objcreation["fooditem"][j] =  x[j]["item"];
       this.objcreation["quantity"][j] =  x[j]["quantity"];
    }   
    i++;
    this.fetch.postNotify(this.objcreation).subscribe();
    this.fetch.postDataAnalytics(this.objcreation).subscribe();
    
      }
    }

