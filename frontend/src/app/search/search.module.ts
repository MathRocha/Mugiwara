import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PhotoComponent } from './search-result/photo/photo.component';
import { SearchService } from './search.service';
import { CrewModule } from '../crew/crew.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    CrewModule
  ],
  declarations: [
    SearchPageComponent,
    SearchResultComponent,
    PhotoComponent
  ],
  exports: [
    SearchPageComponent
  ],
  providers: [SearchService]
})
export class SearchModule { }
