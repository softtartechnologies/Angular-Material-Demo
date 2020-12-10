import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { PersonalDetailComponent } from './Components/student-details/personal-detail/personal-detail.component';
import { GradesComponent } from './Components/student-details/grades/grades.component';


const routes: Routes = [
  { path: 'studentDetail', component: StudentDetailsComponent},
  { path: 'personalDetail', component: PersonalDetailComponent},
  { path: 'grades', component: GradesComponent},
  { path: '', redirectTo: '/studentDetail', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
