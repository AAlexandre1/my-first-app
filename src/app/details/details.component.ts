import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  showPassphrase = false;
  detailsCounter = [];
  showLyric = false;
  lyricCounter = [];

  onToggleDetails() {
    this.showPassphrase = !this.showPassphrase;
    this.detailsCounter.push(this.detailsCounter.length + 1);
  }
  onToggleLyric() {
    this.showLyric = !this.showLyric;
    this.lyricCounter.push(new Date());
  }
}
