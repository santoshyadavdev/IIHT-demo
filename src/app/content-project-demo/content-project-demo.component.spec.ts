import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectDemoComponent } from './content-project-demo.component';

describe('ContentProjectDemoComponent', () => {
  let component: ContentProjectDemoComponent;
  let fixture: ComponentFixture<ContentProjectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProjectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
