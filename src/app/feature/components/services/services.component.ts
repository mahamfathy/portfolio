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
        'Building modern, scalable, and high-performance web applications using Angular.',
    },
    {
      icon: 'devices',
      title: 'Responsive Web Design',
      description:
        'Ensuring websites look great and function perfectly on all devices.',
    },
    {
      icon: 'palette',
      title: 'UI/UX Design',
      description: 'Creating visually appealing and user-friendly interfaces.',
    },
  ];
}
