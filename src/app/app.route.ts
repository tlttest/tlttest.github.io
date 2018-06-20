import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CvComponent } from './pages/cv/cv.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppsComponent } from './pages/apps/apps.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CopyrightComponent } from './pages/copyright/copyright.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'cv',
        component: CvComponent
    }, {
        path: 'portfolio',
        component: PortfolioComponent
    }, {
        path: 'contact',
        component: ContactComponent
    }, {
        path: 'apps',
        component: AppsComponent
    }, {
        path: 'privacy',
        component: PrivacyComponent
    }, {
        path: 'copyright',
        component: CopyrightComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
