import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesListComponent } from './issues-list.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { IssueService } from '../../services/issue.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesListComponent, SearchBarComponent, FilterPipe ],
      imports: [ NgxPaginationModule, MatCardModule, FormsModule, HttpClientModule ],
      providers: [ IssueService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
