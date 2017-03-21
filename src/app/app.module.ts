import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BannerComponent }  from './banner.component';
import { BannerExternalComponent }  from './banner-external.component';
import { WelcomeComponent }  from './welcome.component';
import { UserService } from './user/user.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    BannerComponent,
    BannerExternalComponent,
    WelcomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ UserService ]
})
export class AppModule { }
