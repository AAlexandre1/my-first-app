import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from 'src/app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent, ServersComponent, SuccessAlertComponent, WarningAlertComponent]
})
export class AppModule { }
