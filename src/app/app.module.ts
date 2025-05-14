import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CpfFormComponent} from './components/cpf-form/cpf-form.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {ProgressStepperComponent} from './components/progress-stepper/progress-stepper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NgOptimizedImage} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CpfFormComponent,
    UserDetailsComponent,
    ProgressStepperComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
