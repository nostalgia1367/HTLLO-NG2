import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { HelloPipePipe } from './hello-pipe.pipe';
import { HelloDirectiveDirective } from './hello-directive.directive';
import { AccountListComponentComponent } from './account-list-component/account-list-component.component';
import { AccountListComponent } from './account-list/account-list.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { I18nSupportService } from './i18n-support.service';

const routing = RouterModule.forRoot([
  { path: 'account-list', component: AccountListComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    HelloComponentComponent,
    HelloPipePipe,
    HelloDirectiveDirective,
    AccountListComponentComponent,
    AccountListComponent,
    WelcomeMsgComponent,
    LangSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
