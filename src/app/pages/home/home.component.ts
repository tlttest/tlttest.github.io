import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../common/models/app-constants';
import { HomePageLabels, UrlLabels, MenuLabels } from '../../common/models/labels';
import { LabelsService } from '../../common/services/labels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  label: HomePageLabels;
  urlLabel: UrlLabels;
  menuLabel: MenuLabels;

  errMsg: string;
  errMsgFlag: boolean;

  constructor(private labelsService: LabelsService) {
  }

  getLabels() {
    this.labelsService.getLabelsData().subscribe((data: any) => {
        this.label = data.HomePageLabels;
        this.urlLabel = data.UrlLabels;
        this.menuLabel = data.MenuLabels;
      },
      err => {
        this.errMsgFlag = true;
        this.errMsg = AppConstants.SERVICE_UNAVAILABLE;
        console.error(err);
      },
      () => console.log('done loading getLabels')
    );
  }

  ngOnInit() {
    this.getLabels();
  }

}
