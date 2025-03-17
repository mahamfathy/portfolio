import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
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
}
