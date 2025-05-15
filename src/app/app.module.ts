import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CpfFormComponent} from './pages/cpf-form/cpf-form.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';
import {ProgressStepperComponent} from './components/progress-stepper/progress-stepper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatIcon} from '@angular/material/icon';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CpfFormComponent,
    UserDetailsComponent,
    ProgressStepperComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIcon,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
