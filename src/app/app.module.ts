import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CheckPwdComponent } from './check-pwd/check-pwd.component';
import { CheckPwdDirective } from './check-pwd.directive';
import { AddDocsComponent } from './add-docs/add-docs.component';
import { CheckPwdContentComponent, CheckPwdContentCompComponent } from './check-pwd-content/check-pwd-content.component';
import { ChangePwdDirectiveComponent } from './change-pwd-directive/change-pwd-directive.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CheckPwdComponent,
    CheckPwdDirective,
    AddDocsComponent,
    CheckPwdContentComponent,
    CheckPwdContentCompComponent,
    ChangePwdDirectiveComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CheckPwdContentComponent]
})
export class AppModule { }
