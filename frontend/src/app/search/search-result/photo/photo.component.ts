import { Component, Input } from '@angular/core';
import { Item } from '../../search';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @Input() item: Item;
}
