import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { PersonalDetailComponent } from './Components/student-details/personal-detail/personal-detail.component';
import { GradesComponent } from './Components/student-details/grades/grades.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'studentDetail', component: StudentDetailsComponent},
  { path: 'personalDetail', component: PersonalDetailComponent},
  { path: 'grades', component: GradesComponent},
  { path: '', redirectTo: '/studentDetail', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    PersonalDetailComponent,
    GradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,    
    MatIconModule,
    MatRadioModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
