import { Component, OnInit } from '@angular/core';

import { AppConstants } from '../../common/models/app-constants';
import { AppsPageLabels } from '../../common/models/labels';
import { AppsService } from '../../common/services/apps/apps.service';
import { LabelsService } from '../../common/services/labels.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})

export class AppsComponent implements OnInit {
  label: AppsPageLabels;

  search: any;
  sortBy: any;
  sortReverse: boolean;
  apps: any = [];

  constructor(private labelsService: LabelsService, private service: AppsService) {
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

  showAppsData() {
    this.service.getAppsData().subscribe(data => {
        this.apps = data;
      },
      err => {
        console.error(err);
      },
      () => console.log('done loading showAppsData')
    );
  }

  sort(el: any) {
    this.sortBy = el;
    this.sortReverse = !this.sortReverse;
  }

  ngOnInit() {
    this.getLabels();
    this.showAppsData();
  }

}
