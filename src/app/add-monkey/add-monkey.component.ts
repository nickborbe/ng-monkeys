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
  this.newMonkey = {
  name: this.name,
  averageHeight: this.averageHeight,
  averageWeight: this.averageWeight,
  scientificName: this.scientificName,
  genus: this.genus,
  lifespan: this.lifespan,
  locationsOfOrigin: this.locationsOfOrigin,
  diet: this.diet,
  socialOrder: this.socialOrder,
  description: this.description
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
