import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-monkey',
  templateUrl: './add-monkey.component.html',
  styleUrls: ['./add-monkey.component.css']
})
export class AddMonkeyComponent implements OnInit {

  newMonkey: Object;
brand: String;
name: String;
specs: Array<String>;
image: String;

  constructor() { }

  ngOnInit() {
  }

}
