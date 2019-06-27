import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTHBComponent } from './home-page-thb.component';

describe('HomePageTHBComponent', () => {
  let component: HomePageTHBComponent;
  let fixture: ComponentFixture<HomePageTHBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageTHBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTHBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
