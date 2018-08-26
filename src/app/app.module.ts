import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ROUTING } from './app.routing';
//import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    TestimonialComponent,
    ClientComponent,
    GalleryComponent,
    IntroComponent,
    ContentComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ROUTING
    // ToastrModule.forRoot({
    //   timeOut: 2000,
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true,
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientComponent } from './client/client.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IntroComponent } from './intro/intro.component';
import { ContentComponent } from './content/content.component';
import { TeamComponent } from './team/team.component'
