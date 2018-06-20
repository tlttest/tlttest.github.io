import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { AppsService } from '../../common/services/apps/apps.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, HttpClientModule
  ],
  declarations: [AppsComponent],
  providers: [AppsService]
})
export class AppsModule { }
