import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-monkey',
  templateUrl: './add-monkey.component.html',
  styleUrls: ['./add-monkey.component.css']
})
export class AddMonkeyComponent implements OnInit {

  newMonkey: Object;
  name:String;
  averageHeight:String;
  averageWeight:String;
  scientificName:String;
  genus:String;
  lifespan:String;
  locationsOfOrigin:String;
  diet:String;
  socialOrder:String;
  description:String;

  constructor() { }

  ngOnInit() {
  }

  sendNewPhoneToApi(){
  this.newPhone = {
    brand: this.brand,
    name: this.name,
    specs: this.specs,
    image: this.image
  }
  this.myPhoneService.createNew(this.newPhone).then(()=>{
    this.brand = "";
    this.name = "";
    this.specs = [];
    this.image = "";
    this.newPhone = {};
  });
}




}
