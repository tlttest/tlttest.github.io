import { Component, OnInit } from '@angular/core';
import { FooterLabels, UrlLabels, MenuLabels } from '../../models/labels';
import { LabelsService } from '../../services/labels.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  label: FooterLabels;
  urlLabel: UrlLabels;
  menuLabel: MenuLabels;

  currentYear: number;

  constructor(private labelsService: LabelsService) { }

  getLabels() {
    this.labelsService.getLabelsData().subscribe((data: any) => {
        this.label = data.FooterLabels;
        this.urlLabel = data.UrlLabels;
        this.menuLabel = data.MenuLabels;
      },
      err => {
        console.error(err);
      },
      () => console.log('done loading getLabels')
    );
  }

  getCurrentYear() {
    const today = new Date();
    this.currentYear = today.getFullYear();
  }

  ngOnInit() {
    this.getLabels();
    this.getCurrentYear();
  }

}
