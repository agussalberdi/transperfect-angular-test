import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() output = new EventEmitter<string>();
  issue: string;
  constructor(public service: IssueService) {}

  ngOnInit() {
  }

  onChange() {
    this.output.emit(this.issue);
  }

}
