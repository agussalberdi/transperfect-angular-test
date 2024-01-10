import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit, OnDestroy {
  destroySubject$: Subject<void> = new Subject();
  issues: any = [];
  search: string;
  p = 1;

  constructor(public service: IssueService) {}

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.issues = [];
    this.service.getIssues()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((data) => {
        this.issues = data;
      });
  }

  onSearchChange($event) {
    this.search = $event;
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

}
