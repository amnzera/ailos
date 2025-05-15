import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CpfFormComponent} from './pages/cpf-form/cpf-form.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: CpfFormComponent },
  { path: 'detalhes-usuario', component: UserDetailsComponent },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
