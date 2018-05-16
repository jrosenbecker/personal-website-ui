import 'materialize-css';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AboutComponent } from './main-content/about/about.component';
import { BlogComponent } from './main-content/blog/blog.component';
import { MainContentComponent } from './main-content/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { SocialIconComponent } from './footer/social-icon/socialicon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    SocialIconComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
