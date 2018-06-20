import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, state, query, stagger } from '@angular/animations';
import { AppConstants } from '../../models/app-constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(-50%)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ]))
        ]))
      ])
    ])
  ]
})

export class MenuComponent implements OnInit {
  navFlag: boolean;
  menus: any = [];

  constructor() {
    this.menus = [
      { page: AppConstants.HOME, route: AppConstants.EMPTY, flag: true },
      { page: AppConstants.BLOG, url: AppConstants.BLOGURL, flag: false },
      { page: AppConstants.ABOUT, route: AppConstants.ABOUT, flag: true },
      { page: AppConstants.CV, route: AppConstants.CV, flag: true },
      { page: AppConstants.PORTFOLIO, route: AppConstants.PORTFOLIO, flag: true },
      { page: AppConstants.CONTACT, route: AppConstants.CONTACT, flag: true },
    ];
  }

  navClose() {
    this.navFlag = false;
  }

  ngOnInit() {
  }

}
