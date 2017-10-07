import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TruthService } from '../truth.service';
@Component({
  selector: 'app-monkey-details',
  templateUrl: './monkey-details.component.html',
  styleUrls: ['./monkey-details.component.css']
})
export class MonkeyDetailsComponent implements OnInit {
  monkey = {};
  monkeys = [];
  errorMessage: string = '';
  // marmoset = {};
  // tamarin = {};
  // squirrel = {};
  // capuchin = {};
  // night = {};
  // saki = {};
  // spider = {};
  // howler = {};
  // colobus = {};
  // langur = {};
  // proboscis = {};
  // baboon = {};
  // mandrill = {};
  // guenon = {};
  // macaque = {};



    constructor(
      private myRoute: ActivatedRoute,
      private truthService: TruthService,
      private myNavigator: Router
    ) { }

    // shortenMonkeyName(name){
    //   name.replace(" Monkey", "");
    // }

    ngOnInit() {
      //get the main monkey details
      this.myRoute.params.subscribe((params) => {
        this.getMonkeyDetails(params['id']);
      });
// get all the other monkeys for previews
      this.truthService.getMonkeys()
      .then((list) => {
      this.monkeys = list;
      });

      // this.monkeys.forEach(function(monkey){
      //   monkey.name = monkey.name.replace("Monkey", "");
      // });
    }

    previewOtherMonkey(monkey){
      console.log(monkey.name)
    }


    getMonkeyDetails(id) {
      this.truthService.getMonkeyDetails(id)
        .then((theMonkeyDetails) => {
          this.monkey = theMonkeyDetails;
        })
        .catch((err) => {
          this.errorMessage = 'Sorry, something went wrong. Please try again.';
        });
    }





}
