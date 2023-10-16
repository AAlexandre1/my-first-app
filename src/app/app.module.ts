import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from 'src/app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { UsernameComponent } from './username/username.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UsernameComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent, ServersComponent, SuccessAlertComponent, WarningAlertComponent]
})
export class AppModule { }
