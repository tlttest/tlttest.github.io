import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.route';

// modules
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { CvModule } from './pages/cv/cv.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { ContactModule } from './pages/contact/contact.module';
import { AppsModule } from './pages/apps/apps.module';
import { PrivacyModule } from './pages/privacy/privacy.module';
import { CopyrightModule } from './pages/copyright/copyright.module';
import { AlertModule } from './common/component/alert/alert.module';

// services
import { LabelsService } from './common/services/labels.service';
import { SpinnerService } from './common/services/spinner.service';

// components
import { MenuComponent } from './common/component/menu/menu.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { CanvasComponent } from './common/component/canvas/canvas.component';
import { SpinnerComponent } from './common/component/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CanvasComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppRoutingModule,
    HomeModule, AboutModule, CvModule, PortfolioModule, ContactModule, AppsModule, PrivacyModule, CopyrightModule, AlertModule
  ],
  providers: [LabelsService, SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
