import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolioData() {
    return this.http.get('./assets/data/portfolio.json');
  }

}
