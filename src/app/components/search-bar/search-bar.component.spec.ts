import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar.component';
import { IssueService } from '../../services/issue.service';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [ IssueService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the value', fakeAsync(() => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    fixture.detectChanges();
    tick();

    expect(component.issue).toBeFalsy();

    input.value = 'Hello World';
    input.dispatchEvent(new Event('input'));
    tick();

    expect(component.issue).toBe('Hello World');

  }));

});
