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
  averageHeight:String;
  averageWeight:String;
  scientificName:String;
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

  sendNewMonkeyToApi(){
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
  this.truthService.createNew(this.newMonkey).then(()=>{
  this.name = "";
  this.averageHeight = "";
  this.averageWeight = "";
  this.scientificName = "";
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
