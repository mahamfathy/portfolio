import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  activeSection: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about', 'services', 'tech', 'projects', 'contact'];
    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top <= 100 && top >= -300) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}
