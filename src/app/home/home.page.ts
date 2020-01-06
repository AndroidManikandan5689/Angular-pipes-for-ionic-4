import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  msg: String = "This example for case pipes"
  per_val = 0.567

  listArr = ['a','b','c','d','e','f']

  greeting: Promise<string>|null = null;
  arrived: boolean = false;
  private resolve: Function|null = null;

  name = "mani"
  score: any = { "mani": "80%", "siva": "90%", "raj": "70%"} //Map

  object: Object = {name: 'mani', age: '30', location: {no: 10, address: ["new street", "city", "state", "country"]}};

  constructor() { this.reset(); }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }

}
