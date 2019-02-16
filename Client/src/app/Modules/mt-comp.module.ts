import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule,
  MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatPaginatorModule,MatFormFieldModule,
  MatOptionModule,MatSelectModule, MatTableModule
} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule
  ],
    exports: [
      MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule, MatCheckboxModule,
      MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatPaginatorModule, MatSliderModule,MatFormFieldModule,
      MatOptionModule,MatSelectModule,MatProgressSpinnerModule,MatTableModule
  ], 
})
export class MtCompModule { }
