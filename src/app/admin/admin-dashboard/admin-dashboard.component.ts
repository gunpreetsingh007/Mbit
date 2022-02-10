import { FoodItems } from './../../inventory/fooditem';
import { FetchService } from './../../fetch.service';
import { adminModel } from './../../admin';
import { AdminComponent } from './../admin.component';
import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

 
  private actualuser: adminModel;
  private food:FoodItems[];
  constructor(private lol: AdminComponent , private route2: Router,private fetch: FetchService) { }

  ngOnInit() {
   console.log(this.fetch.returnStatus());
     this.actualuser = this.lol.returnUser();
     
     this.fetch.getFood().subscribe( (data: FoodItems[]) => {
      this.food = data;
      })
    
  }

}
