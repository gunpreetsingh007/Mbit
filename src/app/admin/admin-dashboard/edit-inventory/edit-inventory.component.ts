
import { FoodItems } from './../../../inventory/fooditem';
import { FetchService } from './../../../fetch.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {

  private food: FoodItems[] = [];
  private orgfood: FoodItems[] = [];
 private idlol: number;
 
 
  constructor(private fetch: FetchService) { }


  ngOnInit() {

    this.fetch.getFood().subscribe( (data: FoodItems[]) => {
      this.food = data;
      this.orgfood = data;
      this.idlol = this.food.length;
         
      });
      

    
  }

  filterlist(x:number){
   this.food= this.food.filter(data => data.id!=x);
   this.fetch.deleteFood(x).subscribe();
  }
  addItem(){
    let obj:FoodItems={
      "id": this.idlol + 1,
      "item": "",
      "price": "",
      "quantity": null,
      "available": null,
      "index": null
    }
    this.food.push(obj);
    this.fetch.appendList(obj);
    ++this.idlol ;

  }

 
  
updateAll()
{

 for(let i=0 ; i <this.food.length ;i++)
    {
      this.fetch.updateALL(this.food[i]).subscribe();
      
    }

}



    
  
}



