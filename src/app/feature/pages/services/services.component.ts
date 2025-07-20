import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('fadeInFromLeft', [
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(-100px)' })),
      transition('hidden => visible', animate('1000ms ease-out')),
    ]),
    trigger('fadeInFromRight', [
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(100px)' })),
      transition('hidden => visible', animate('1000ms ease-out')),
    ]),
  ],
})
export class ServicesComponent implements OnInit {
  cardStates: ('visible' | 'hidden')[] = [];

  services: Service[] = [
    {
      icon: 'code',
      title: 'Angular Development',
      description:
        'Developing modern, scalable, and high-performance web applications using Angular. Focusing on component-based architecture and state management for optimized solutions.',
    },
    {
      icon: 'devices',
      title: 'Responsive Web Design',
      description:
        'Creating websites that adapt seamlessly to all screen sizes, ensuring a consistent and engaging user experience across desktops, tablets, and mobile devices.',
    },
    {
      icon: 'palette',
      title: 'UI/UX Design',
      description:
        'Designing intuitive and visually appealing interfaces with a focus on usability and accessibility, enhancing user interaction and engagement.',
    },
  ];
  ngOnInit(): void {
    this.cardStates = Array(this.services.length).fill('hidden');
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      if (isVisible && this.cardStates[i] !== 'visible') {
        this.cardStates[i] = 'visible';
      }
    });
  }
}
