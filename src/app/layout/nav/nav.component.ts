import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;
  activeSection: string = '';
  isDarkMode: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }
  closeNavbar() {
    setTimeout(() => {
      const element = this.navbarCollapse.nativeElement;
      if (element.classList.contains('show')) {
        element.classList.remove('show');
      }
    }, 300);
  }
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
