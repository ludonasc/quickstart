import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { WelcomeComponent } from './welcome.component'
import { UserService } from './user/user.service'
import { IUser } from './user/user.model'
import { UserServiceStub } from "./user/user.service.stub";

describe('WelcomeComponent', () => {

  let comp: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let userServiceInstance: any;
  let userServiceStub: UserServiceStub;

  beforeEach(() => {

    userServiceStub = new UserServiceStub();
    userServiceStub.user = { name: 'Test User' };

    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [
        { provide: UserService, useValue: userServiceStub }
      ]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    comp = fixture.componentInstance; // BannerComponent test instance
    //userServiceInstance = fixture.debugElement.injector.get(UserService);
    userServiceInstance = TestBed.get(UserService);

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });

  // it('stub object and injected UserService should not be the same', () => {
  //   expect(userServiceStub === userServiceInstance).toBe(false);

  //   // Changing the stub object has no effect on the injected service
  //   userServiceStub.user.name = "John";
  //   expect(userServiceInstance.user.name).toBe("Jack");
  // });

  it('should welcome the user', () => {
    userServiceInstance._isLoggedIn = true;
    fixture.detectChanges();
    expect(el.textContent).toBe(`Welcome, ${userServiceInstance.user.name}`);
    // expect(el.textContent).toContain('Welcome', '"Welcome ..."');
    // expect(el.textContent).toContain('Test User', 'expected name');
  });

  it('should ask the user to login if not logged in', () => {
    userServiceInstance._isLoggedIn = false;
    fixture.detectChanges();
    expect(el.textContent).toBe('Please log in.');
  });
});