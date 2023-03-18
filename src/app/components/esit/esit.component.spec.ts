import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsitComponent } from './esit.component';

describe('EsitComponent', () => {
  let component: EsitComponent;
  let fixture: ComponentFixture<EsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
