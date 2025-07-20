import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements AfterViewInit {
  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;
  activeSection: string = '';
  isDarkMode: boolean = false;
  isMenuOpen: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    this.isDarkMode = document.body.classList.contains('dark');
    this.loadParticles();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
    this.loadParticles();
  }

  closeNavbar() {
    setTimeout(() => {
      const element = this.navbarCollapse?.nativeElement;
      if (element?.classList.contains('show')) {
        element.classList.remove('show');
      }
    }, 300);
  }

  loadParticles() {
    const color = this.isDarkMode ? '#ffffff' : '#000000';
    const w = window as any;

    if (w.pJSDom && w.pJSDom.length > 0) {
      w.pJSDom[0].pJS.fn.vendors.destroypJS();
      w.pJSDom = [];
    }

    w.particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 800 },
        },
        color: { value: color },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: color,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          out_mode: 'out',
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
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
