import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroChildComponent, HeroParentComponent, NameChildComponent, NameParentComponent, VersionParentComponent, VersionChildComponent, NewsComponent, HeaderComponent, TransitionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
