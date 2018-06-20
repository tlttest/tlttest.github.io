import { Component, OnInit } from '@angular/core';

import { AppConstants } from '../../common/models/app-constants';
import { AppsPageLabels } from '../../common/models/labels';
import { PortfolioService } from '../../common/services/portfolio/portfolio.service';
import { LabelsService } from '../../common/services/labels.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  label: AppsPageLabels;

  search: any;
  sortBy: any;
  sortReverse: boolean;
  folios: any = [];

  constructor(private labelsService: LabelsService, private service: PortfolioService) {
    this.search = '';
    this.sortBy = AppConstants.APPS_TITLE;
    this.sortReverse = false;
   }

  getLabels() {
    this.labelsService.getLabelsData().subscribe((data: any) => {
        this.label = data.AppsPageLabels;
      },
      err => {
        console.error(err);
      },
      () => console.log('done loading getLabels')
    );
  }

  showPortfolioData() {
    this.service.getPortfolioData().subscribe(data => {
        this.folios = data;
      },
      err => {
        console.error(err);
      },
      () => console.log('done loading showPortfolioData')
    );
  }

  sort(el: any) {
    this.sortBy = el;
    this.sortReverse = !this.sortReverse;
  }

  ngOnInit() {
    this.getLabels();
    this.showPortfolioData();
  }

}
