import { Component, OnInit , Input} from '@angular/core';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @Input() 
  subevent: string;

  placeholder: string;
  constructor() { }

  ngOnInit() {
  }

}
