import { Component, Input } from '@angular/core';
import { Search, Item } from '../search';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() searchResult: Search[] = [];
  selectedItem: Item;
  rowNumber: number;

  selectPhoto(item: Item, rowNumber: number) {
    if(this.selectedItem == item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
      this.rowNumber = rowNumber;
    }
  }
}
