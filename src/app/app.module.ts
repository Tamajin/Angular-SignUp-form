import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    SignUpComponent,
    PasswordPatternDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
