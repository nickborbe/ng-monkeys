import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TruthService } from '../truth.service';
@Component({
  selector: 'app-monkey-details',
  templateUrl: './monkey-details.component.html',
  styleUrls: ['./monkey-details.component.css']
})
export class MonkeyDetailsComponent implements OnInit {
  monkey = {name: "", height: "", weight: "", locations_of_origin: "",
            diet: "", description: "", social_order: "", lifespan: "",
            image1: "", image2: "", genus: "", sub_family: ""};
  monkeys = [];
  errorMessage: string = '';



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
      this.monkeys = list
    }).then((monkey) => {
      this.monkeys.forEach(function(monkey){
          monkey.shortName = monkey.name.replace("Monkey", "");
        });
  })
    }

    previewOtherMonkey(monkey){
      this.monkey = monkey;

    }

    previewNoMonkey(){
      this.myRoute.params.subscribe((params) => {
        this.getMonkeyDetails(params['id']);
      });
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
