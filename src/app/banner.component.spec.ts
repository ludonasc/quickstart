import { ComponentFixture, ComponentFixtureAutoDetect ,TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { BannerComponent } from './banner.component'

describe('BannerComponent (inline template)', () => {

  let comp: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    // declare the test component
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: false }
      ] 
    });
    fixture = TestBed.createComponent(BannerComponent);
    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.name);
  });

  it('should display a different test title', () => {
    comp.name = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

});