import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  dailyReportForm:FormGroup;
  monthlyReportForm:FormGroup;
  userReportForm:FormGroup;
  weeklyReportForm:FormGroup;

  dailySubmitted = false;
  monthlySubmitted = false;
  userSubmitted = false;
  weeklySubmitted = false;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.dailyReportForm = this.fb.group({
      date: ['', Validators.required]
    });

    this.monthlyReportForm = this.fb.group({
      year: ['', Validators.required],
      month: ['', Validators.required]
    });

    this.userReportForm = this.fb.group({
      user: ['', Validators.required]
    });

    this.weeklyReportForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  getDailyReport() {
    const {date} = this.dailyReportForm.value;
    this.dailySubmitted = true;

    if(this.dailyReportForm.valid) {
      this.router.navigateByUrl('admin/ReportsTable/daily/'+date);
    }
    

    
  }

  getMonthlyReport() {
    const {year, month} = this.monthlyReportForm.value;
    this.monthlySubmitted = true;

    if(this.monthlyReportForm.valid) {
      this.router.navigateByUrl(`admin/ReportsTable/monthly/${month[0]}-${year}`);
    }
    
   
  }

  getUserReport() {
    const {user} = this.userReportForm.value;
    this.userSubmitted = true;

    if(this.userReportForm.valid) {
      this.router.navigateByUrl('admin/ReportsTable/user/'+user);
    }
    
  }

  getWeeklyReport() {
    const {startDate, endDate} = this.weeklyReportForm.value;
    this.weeklySubmitted = true;

    if(this.weeklyReportForm.valid) {
      this.router.navigateByUrl(`admin/ReportsTable/weekly/${startDate}/${endDate}`);
    }
    
   
  }

}
