import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {
  issues: any = [];
  search: string;
  p: number = 1;

  constructor(public service: IssueService) {}

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.issues = [];
    this.service.getIssues().subscribe((data) => {
      this.issues = data;
    });
  }

  onSearchChange($event) {
    this.search = $event;
  }

}
