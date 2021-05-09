import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  inputs: number[];
  checkboxes: number[];

  constructor() { }

  ngOnInit() {
    this.inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.checkboxes = [1, 2, 3];
  }

}
