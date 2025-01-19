import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './modules/home/body.component';
import { AboutComponent } from './modules/about/about.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ServicesComponent } from './modules/services/services.component';
import { DocumentsComponent } from './modules/components/documents/documents.component';
import { VideosComponent } from './modules/components/videos/videos.component';
import { ImagesComponent } from './modules/components/images/images.component';
import { WebsitesComponent } from './modules/components/websites/websites.component';
// import { LinksComponent } from './modules/components/links/links.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: 'homepage', component: BodyComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'client_project_page', component: ProjectsComponent},
  {path: 'contacts', component: ContactComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'websites', component: WebsitesComponent},
  // {path: 'links', component: LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
