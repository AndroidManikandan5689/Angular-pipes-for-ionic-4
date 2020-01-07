import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss']
})
export class CountryPage implements OnInit {

  filterKey = ["name"];
  countryList : any = [{"name":"India"}, {"name":"Singapore"}, {"name":"Malaysia"}, {"name":"Canada"}, {"name":"United State"}, {"name":"United Kingdom"}, {"name":"Saudi Arabia"}, {"name":"Dubai"}];

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack()
  {
    this.location.back();
  }

}
