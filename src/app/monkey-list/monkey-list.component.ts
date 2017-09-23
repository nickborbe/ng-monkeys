 import { Component, OnInit } from '@angular/core';

import { TruthService } from '../truth.service';


@Component({
  selector: 'app-monkey-list',
  templateUrl: './monkey-list.component.html',
  styleUrls: ['./monkey-list.component.css']
})
export class MonkeyListComponent implements OnInit {
  whichWorld = "";
  monkeys = [];
  callitrichidae = [];
  cebidae = [];
  atelidae = [];
  aotidae = [];
  pitheciidae = [];
  which_world = "new";
  errorMessage = "";

  constructor(private truthService: TruthService) { }

  ngOnInit() {

  this.truthService.getMonkeys()
    .then((list) => {
    this.monkeys = list;
    this.callitrichidae = list.filter((monkey)=>{ return monkey.family === "Callitrichidae"});
    this.cebidae = list.filter((monkey)=>{ return monkey.family === "Cebidae"});
    this.atelidae = list.filter((monkey)=>{ return monkey.family === "Atelidae"});
    this.aotidae = list.filter((monkey)=>{ return monkey.family === "Aotidae"});
    this.pitheciidae = list.filter((monkey)=>{ return monkey.family === "Pitheciidae"});
  })
  .catch((err) => {
    this.errorMessage = 'There was an error. Try again later.';
  });

  // figure out which world to show
  this.truthService.whichWorld
    .subscribe((result)=>{this.whichWorld = result});
    //
  } // ngOnInit

}
