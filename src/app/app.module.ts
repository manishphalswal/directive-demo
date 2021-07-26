import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrDirComponentComponent } from './components/str-dir-component/str-dir-component.component';
import { AttrDirComponentComponent } from './components/attr-dir-component/attr-dir-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ChangeCaseDirective } from './directives/changecase/changecase/change-case.directive';
import { CustomDirHostComponent } from './components/custom-dir-host/custom-dir-host.component';
import { AgeLimitDirective } from './directives/customStrDir/agelimit/age-limit.directive';

@NgModule({
  declarations: [
    AppComponent,
    StrDirComponentComponent,
    AttrDirComponentComponent,
    HeaderComponent,
    ChangeCaseDirective,
    CustomDirHostComponent,
    AgeLimitDirective
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
