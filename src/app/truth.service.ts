import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TruthService {
BASE_URL = "http://localhost:3000"

  constructor(private myHttp: Http) { }

  getMonkeys(){
    return this.myHttp.get(`${this.BASE_URL}/api_monkeys`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

}
