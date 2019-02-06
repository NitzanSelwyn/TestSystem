import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule,
  MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatPaginatorModule
} from "@angular/material";
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  exports: [
    MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule, MatCheckboxModule,
    MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatPaginatorModule, MatSliderModule,
  ],
  imports: [
    CommonModule
  ]
})
export class MtCompModule { }
