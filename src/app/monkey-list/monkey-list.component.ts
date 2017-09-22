import { Component, OnInit } from '@angular/core';

import { TruthService } from '../truth.service';


@Component({
  selector: 'app-monkey-list',
  templateUrl: './monkey-list.component.html',
  styleUrls: ['./monkey-list.component.css']
})
export class MonkeyListComponent implements OnInit {

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
  })
  .catch((err) => {
    this.errorMessage = 'There was an error. Try again later.';
  });
  }

}
