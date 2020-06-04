import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { TransitionComponent } from './transition/transition.component';
import { HttpComponent } from './http/http.component';
import { HomeComponent } from './home/home.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { MissionService } from './mission.service';
import { MissionControlComponent } from './missioncontrol.component';
import { AstronautComponent } from './astronaut.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HeroChildComponent, HeroParentComponent, NameChildComponent, NameParentComponent, VersionParentComponent, VersionChildComponent, NewsComponent, HeaderComponent, TransitionComponent, HttpComponent, HomeComponent, VotetakerComponent, VoterComponent, CountdownTimerComponent, CounterParentComponent,MissionControlComponent, AstronautComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MissionService]
})
export class AppModule { }
