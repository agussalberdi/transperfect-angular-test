import { TestBed, inject  } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { IssueService } from './issue.service';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('IssueService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, HttpClientTestingModule ],
    providers: [ IssueService ]
  }));

  it('should be created', () => {
    const service: IssueService = TestBed.get(IssueService);
    expect(service).toBeTruthy();
  });

  it(
    'should get issues',
    inject(
      [HttpTestingController, IssueService],
      (httpMock: HttpTestingController, dataService: IssueService) => {
        const mockIssues = [
          { number: 31098, title: 'fix(router): include null in UrlMatchResult type' },
          { number: 31100, title: 'ci: propagate xml results to CI' }
        ];

        dataService.getIssues().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockIssues);
          }
        });

        const mockReq = httpMock.expectOne('https://api.github.com/repos/angular/angular/issues');

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockIssues);

        httpMock.verify();
      }
    )
  );
});
