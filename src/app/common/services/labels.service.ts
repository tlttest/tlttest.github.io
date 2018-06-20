import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LabelsService {

  constructor(private http: HttpClient) { }

  getLabelsData() {
    return this.http.get('./assets/data/labels.json');
  }

}
