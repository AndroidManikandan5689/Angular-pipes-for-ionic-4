import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
/**
   * @param  {any[]} items
   * @param  {string} searchText
   * @param  {any} filterGroup
   */
  transform(items: any[], searchText: string, filterGroup: any): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return _.filter(items, it => this.filterByOr(it, filterGroup, searchText));
  }
  
  /**
   * @param  {any} item
   * @param  {any} filterGroup
   * @param  {string} searchText
   */
 filterByOr(item: any, filterGroup: any, searchText: string) {
   let flag = false;
   for (let key of filterGroup) {
     switch (typeof item[key]) {
       case 'string': flag = this.filterByString(item, key, searchText);
         break;
       case 'number': flag = this.filterByNumber(item, key, searchText);
         break;
       case 'boolean': flag = this.filterByBoolean(item, key, searchText);
         break;
     }
     if (flag) { break; }
   }
   return flag;
 }

 /** Filter by string data type
  * @param  {} item
  * @param  {} key
  * @param  {} searchText
  */
 filterByString(item, key, searchText) {
   console.log(key)
   return item[key].toLowerCase().includes(searchText);
 }

 /** Filter by number data type
  * @param  {} item
  * @param  {} key
  * @param  {} searchText
  */
 filterByNumber(item, key, searchText) {
   return item[key] === Number.parseFloat(searchText);
 }

 /** Filter by boolean data type
  * @param  {} item
  * @param  {} key
  * @param  {} searchText
  */
 filterByBoolean(item, key, searchText) {
   return item[key] === (/true/i).test(searchText);
 }

}
