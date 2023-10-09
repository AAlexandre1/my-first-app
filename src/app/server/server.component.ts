import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverID: number = 13;
  serverStatus: string = 'active';

  getServerStatus() {
    return this.serverStatus;
  }
}