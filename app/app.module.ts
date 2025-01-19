import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './modules/home/body.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { ServicesComponent } from './modules/services/services.component';
import { DocumentsComponent } from './modules/components/documents/documents.component';
import { LinksComponent } from './modules/components/links/links.component';
import { ImagesComponent } from './modules/components/images/images.component';
import { VideosComponent } from './modules/components/videos/videos.component';
import { WebsitesComponent } from './modules/components/websites/websites.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
 AppComponent,
 BodyComponent,
 ProjectsComponent,
 ContactComponent,
 AboutComponent,
 ServicesComponent,
 DocumentsComponent,
 LinksComponent,
 ImagesComponent,
 VideosComponent,
 WebsitesComponent,
 NavbarComponent,
 FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
