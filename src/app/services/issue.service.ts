import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private repo = 'angular';
  private owner = 'angular';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    return res || { };
  }

  getIssues(): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${this.owner}/${this.repo}/issues`)
      .pipe(map(this.extractData));
  }

}
