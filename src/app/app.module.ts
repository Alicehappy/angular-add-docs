import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CheckPwdComponent } from './check-pwd/check-pwd.component';
import { CheckPwdDirective } from './check-pwd.directive';
import { AddDocsComponent } from './add-docs/add-docs.component';
import { CheckPwdContentComponent, CheckPwdContentCompComponent } from './check-pwd-content/check-pwd-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CheckPwdComponent,
    CheckPwdDirective,
    AddDocsComponent,
    CheckPwdContentComponent,
    CheckPwdContentCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CheckPwdContentComponent]
})
export class AppModule { }
