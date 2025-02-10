import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './public-components/home/home.component';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync(),

    CounterService,
    // {provide : CounterService , useClass : Counter2Service},
    {provide : CounterService , useExisting : Counter2Service} , Counter2Service ,
  
  {provide : 'appTitle' , useValue : {title : 'This is app Title' , description : 'This is app Description'}} , 


    // CounterService,
  //   {provide : CounterService , useFactory : (testservice : TestService) =>
  //     testservice.status ? new CounterService :  new CounterService()},
  // deps : [testservice]}

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
