import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MsalModule.forRoot({
      auth:{
        clientId:"70f93263-c0de-40b4-83f8-16b15ca7b3f1", // Application Id of Application registered in B2C
        authority:"https://georgepatrascu.b2clogin.com/georgepatrascu.onmicrosoft.com/B2C_1_azurepoc1auth", //signup-signin userflow
        validateAuthority:false,
        redirectUri:"http://localhost:4200/"
      },
      cache:{
        cacheLocation:"sessionStorage",
        storeAuthStateInCookie:false
      }
    },{
      consentScopes:[
        "user.read","openid","profile"
      ]
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
