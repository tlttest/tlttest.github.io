import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { AlertModule } from '../../common/component/alert/alert.module';

@NgModule({
  imports: [
    CommonModule, RouterModule, AlertModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
