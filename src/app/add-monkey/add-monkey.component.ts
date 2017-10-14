import { Component, OnInit } from '@angular/core';
import { TruthService } from '../truth.service';


@Component({
  selector: 'app-add-monkey',
  templateUrl: './add-monkey.component.html',
  styleUrls: ['./add-monkey.component.css']
})
export class AddMonkeyComponent implements OnInit {

  newMonkey: Object;
  name:String;
  height:String;
  weight:String;
  subFamily:String;
  genus:String;
  lifespan:String;
  locationsOfOrigin:String;
  diet:String;
  socialOrder:String;
  description:String;

  constructor(private truthService: TruthService,
) { }

  ngOnInit() {
  }

  createNewMonkey(){

  this.newMonkey = {
  name: this.name,
  height: this.height,
  weight: this.weight,
  sub_family: this.subFamily,
  genus: this.genus,
  lifespan: this.lifespan,
  locations_of_origin: this.locationsOfOrigin,
  diet: this.diet,
  socialOrder: this.socialOrder,
  description: this.description
  }
  console.log(this.newMonkey);
  this.truthService.createNew(this.newMonkey).then(()=>{
  this.name = "";
  this.height = "";
  this.weight = "";
  this.subFamily = "";
  this.genus = "";
  this.lifespan = "";
  this.locationsOfOrigin = "";
  this.diet = "";
  this.socialOrder = "";
  this.description = "";
  this.newMonkey = {};
  });
}




}
