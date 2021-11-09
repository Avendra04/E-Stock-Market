import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeleteCompanyComponent } from './search-delete-company.component';

describe('SearchDeleteCompanyComponent', () => {
  let component: SearchDeleteCompanyComponent;
  let fixture: ComponentFixture<SearchDeleteCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeleteCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeleteCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
