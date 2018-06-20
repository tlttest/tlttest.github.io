import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from '../../common/services/portfolio/portfolio.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, HttpClientModule
  ],
  declarations: [PortfolioComponent],
  providers: [PortfolioService]
})
export class PortfolioModule { }
