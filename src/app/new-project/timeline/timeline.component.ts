import { Component, OnInit , Input , Output , EventEmitter, AfterViewInit } from '@angular/core';
import { AddEventComponent } from './add-event/add-event.component'
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit , AfterViewInit{

  
  public subevent: string;
  public controls: any = [];
  constructor() { }

  ngOnInit() {
  }

  addSubEvent(subevent)
  {
    console.log("add",subevent)
    this.controls.push(subevent);
  }

  ngAfterViewInit(){

  }
}
