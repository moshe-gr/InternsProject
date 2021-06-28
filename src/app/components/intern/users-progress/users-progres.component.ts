import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-progres',
  templateUrl: './users-progres.component.html',
  styleUrls: ['./users-progres.component.css']
})
export class UsersProgressComponent implements OnInit {

  chartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My grades",
          data: [
            {
              x: new Date('2018-02-12').getTime(),
              y: 49
            },
            {
              x: new Date('2018-10-12').getTime(),
              y: 91
            },
            {
              x: new Date('2019-02-12').getTime(),
              y: 69
            },
            {
              x: new Date('2019-12-12').getTime(),
              y: 100
            },
            {
              x: new Date('2020-05-12').getTime(),
              y: 62
            },
          ]
        },
      ],
      chart: {
        type: "bar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        max: 100,
        min: 20,
        tickAmount: 4,
      }
    };
  }

  ngOnInit(): void {
  }

}
