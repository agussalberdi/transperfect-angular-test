import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {
  issues: any = [];
  searchNumber: string;

  constructor(public service: IssueService) {}

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.issues = [];
    this.service.getIssues().subscribe((data: {}) => {
      console.log(data);
      this.issues = data;
    });
  }

  onSearchChange($event) {
    this.searchNumber = $event;
    console.log('ISSUESLIST: ', this.searchNumber);
  }

}
