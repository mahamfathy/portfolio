import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './feature/pages/about/about.component';
import { ProjectsComponent } from './feature/pages/projects/projects.component';
import { SingleProjectComponent } from './feature/pages/projects/single-project/single-project.component';
import { ServicesComponent } from './feature/pages/services/services.component';
import { TechStackComponent } from './feature/pages/tech-stack/tech-stack.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    TechStackComponent,
    ProjectsComponent,
    SingleProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
