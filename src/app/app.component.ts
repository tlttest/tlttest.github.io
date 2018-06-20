import { Component } from '@angular/core';
import { SpinnerService } from './common/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private spinner: SpinnerService) {}
  onRouting(event) {
    this.spinner.start();
    window.scroll(0, 0);
    setTimeout(() => {
      this.spinner.stop();
    }, 3000);
  }
}
