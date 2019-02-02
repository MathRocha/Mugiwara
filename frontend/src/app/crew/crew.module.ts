import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewListComponent } from './crew-list/crew-list.component';
import { CrewService } from './crew.service';
import { CrewDetailComponent } from './crew-detail/crew-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CrewListComponent,
    CrewDetailComponent
  ],
  exports: [
    CrewListComponent,
    CrewDetailComponent
  ],
  providers: [CrewService]
})
export class CrewModule { }
