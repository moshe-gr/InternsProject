import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/currentUser.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-users-progres',
  templateUrl: './users-progres.component.html',
  styleUrls: ['./users-progres.component.css']
})
export class UsersProgressComponent implements OnInit {

  chartOptions;
  myGrades: { x: number, y: number }[] = [];

  constructor(private currentUserService: CurrentUserService, private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getInternDone(this.currentUserService.user.more_info._id).subscribe(
      data => {
        data.forEach(
          test => {
            test.result ? this.myGrades.push({ x: test.date, y: test.result }) : null
          }
        );
        this.chartOptions = {
          series: [
            {
              name: "My grades",
              data: this.myGrades
            },
          ],
          chart: {
            type: "bar",
            toolbar: {
              show: false
            }
          },
          xaxis: {
            type: "datetime"
          },
          yaxis: {
            max: 100,
            min: 20,
            tickAmount: 4,
          }
        };
      },
      err => console.error(err)
    );
  }

}
