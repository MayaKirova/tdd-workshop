import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should add numbers', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let res = app.addNumbers(1, 2);
    expect(res).toBe(3);

    res = app.addNumbers(2, 3);
    expect(res).toBe(5);

    res = app.addNumbers(17, 18);
    expect(res).toBe(35);

    res = app.addNumbers(-17, 18);
    expect(res).toBe(1);

    res = app.addNumbers(17, -18);
    expect(res).toBe(-1);

    res = app.addNumbers(17, Infinity);
    expect(res).toBe(Infinity);

    expect(() => app.addNumbers(NaN, Infinity)).toThrowError('Parameters should be number.');
  });
  it('should add numbers in component.', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.changeDetectorRef.detectChanges();
    const comp = fixture.componentInstance;
    expect(comp.addInputNumbers()).toBe(0);
    comp.x = 1;
    comp.y = 2;
    expect(comp.addInputNumbers()).toBe(3);
    
  });

  it('should add numbers correctly in template', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const comp = fixture.componentInstance;
    const span = fixture.debugElement.nativeElement.querySelector('span');
    expect(span.textContent).toBe('0');


    comp.x = 1;
    comp.y = 2;
    fixture.detectChanges();
    expect(span.textContent).toBe('3');
  });
});
