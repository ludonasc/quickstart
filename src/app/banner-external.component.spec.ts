import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { BannerExternalComponent } from './banner-external.component'

describe('BannerExternalComponent (external template)', () => {

  let comp: BannerExternalComponent;
  let fixture: ComponentFixture<BannerExternalComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerExternalComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: false }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(BannerExternalComponent);
      comp = fixture.componentInstance; // BannerComponent test instance

      // query for the title <h1> by CSS element selector
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;
    });
  }));

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