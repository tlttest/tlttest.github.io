import { Component, OnInit } from '@angular/core';
import { AboutPageLabels, UrlLabels } from '../../common/models/labels';
import { LabelsService } from '../../common/services/labels.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  label: AboutPageLabels;
  urlLabel: UrlLabels;

  constructor(private labelsService: LabelsService) { }

  getLabels() {
    this.labelsService.getLabelsData().subscribe((data: any) => {
        this.label = data.AboutPageLabels;
        this.urlLabel = data.UrlLabels;
      },
      err => {
        console.error(err);
      },
      () => console.log('done loading getLabels')
    );
  }

  ngOnInit() {
    this.getLabels();
  }

}
