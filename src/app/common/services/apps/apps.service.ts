import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppsService {

  constructor(private http: HttpClient) { }

  getAppsData() {
    return this.http.get('./assets/data/apps.json');
  }

}
