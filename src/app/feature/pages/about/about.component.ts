import { AfterViewInit, Component } from '@angular/core';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const target = document.querySelector('.typewriter');

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#e70faa',
    });

    writer
      .type('Maha Fathy')
      .rest(1500)
      .remove('Maha Fathy'.length)
      .rest(500)
      .start();
  }
}
