import { TestBed } from '@angular/core/testing';
import { IssueService } from './issue.service';
import { HttpClientModule } from '@angular/common/http';

describe('IssueService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ],
    providers: [ IssueService ]
  }));

  it('should be created', () => {
    const service: IssueService = TestBed.get(IssueService);
    expect(service).toBeTruthy();
  });
});
