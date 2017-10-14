import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-monkey',
  templateUrl: './add-monkey.component.html',
  styleUrls: ['./add-monkey.component.css']
})
export class AddMonkeyComponent implements OnInit {

  newMonkey: Object;
  Name:String;
  AverageHeight:String;
  AverageWeight:String;
  ScientificName:String;
  Genus:String;
  Lifespan:String;
  LocationsOfOrigin:String;
  Diet:String;
  SocialOrder:String;
  Description:String;

  constructor() { }

  ngOnInit() {
  }

}
