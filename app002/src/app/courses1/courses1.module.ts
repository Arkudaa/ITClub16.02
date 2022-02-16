import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Courses1PageRoutingModule } from './courses1-routing.module';

import { Courses1Page } from './courses1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Courses1PageRoutingModule
  ],
  declarations: [Courses1Page]
})
export class Courses1PageModule {}
