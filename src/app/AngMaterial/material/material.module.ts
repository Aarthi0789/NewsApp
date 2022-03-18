import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

const material=[MatToolbarModule,MatIconModule,MatButtonModule,MatCardModule,MatRadioModule,MatCheckboxModule,MatSelectModule];

@NgModule({
  
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
