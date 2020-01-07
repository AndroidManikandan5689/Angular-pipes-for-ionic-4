import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryPageRoutingModule } from './country-routing.module';

import { CountryPage } from './country.page';
import { FilterByPipe } from '../pipes/filter-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryPageRoutingModule
  ],
  declarations: [CountryPage, FilterByPipe]
})
export class CountryPageModule {}
