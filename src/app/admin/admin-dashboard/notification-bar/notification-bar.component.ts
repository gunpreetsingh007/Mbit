import { FetchService } from './../../../fetch.service';
import { selectedTable } from './table';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {
  private listselected:selectedTable[] =[{"id": null , "tableno": null , "fooditem": [] ,"quantity": [] , "time": "" }];

  constructor(private fetch: FetchService) { }

  ngOnInit() {
    this.fetch.getNotify().subscribe( (data: selectedTable[]) => {
      this.listselected = data;
      })
   

  }

 
  filterList(x: number)
  {
  this.fetch.deletenotify(x).subscribe();

  }

}
