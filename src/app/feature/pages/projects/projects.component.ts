import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      image: 'assets/images/png/hotel-system.png',
      title: 'Hotel System',
      description:
        'A modular hotel booking system with admin and user dashboard, room management, and secure payments.',
      techStack: 'Angular, Scss, Angular material, Bootstrap',
      link: 'https://hotel-system-roan.vercel.app',
    },
    {
      image: 'assets/images/png/pms.png',
      title: 'PMS',
      description:
        'A full project management system for handling users, projects, and tasks with real-time status tracking.',
      techStack: 'Angular, TypeScript, Scss, RxJS, Bootstrap',
      link: 'https://jsb-5-pms.netlify.app/#/',
    },
    {
      image: 'assets/images/png/food-app.png',
      title: 'Food App',
      description:
        'An online food ordering platform with authentication and user/admin roles, styled with Angular Material.',
      techStack: 'Angular, SCSS, Angular Material',
      link: 'https://jsb-food-app.netlify.app/#/',
    },
    {
      image: 'assets/images/png/quiz-app.png',
      title: 'Quiz App',
      description:
        'A role-based quiz platform for teachers and students with question bank, results, and group management.',
      techStack: 'Angular, TypeScript, Angular Material',
      link: 'https://github.com/Romany285/quiz-app',
    },

    {
      image: 'assets/images/png/portfolio.png',
      title: 'Personal Portfolio',
      description:
        'Responsive and animated personal portfolio to showcase projects, skills, and contact information.',
      techStack: 'Angular, SCSS, Animations',
      link: 'https://github.com/mahamfathy/portfolio',
    },
    {
      image: 'assets/images/png/menu-task.png',
      title: 'Menu Task UI',
      description:
        'A clean, component-based food menu layout task, focusing on responsive UI and reusable components.',
      techStack: 'Angular, Bootstrap, SCSS',
      link: 'https://mahamfathy.github.io/menu-upskilling-task/',
    },
    {
      image: 'assets/images/png/visionboard.png',
      title: 'VisionBoard Dashboard',
      description:
        'A modern and responsive admin dashboard built to manage tasks, users, and analytics with real-time data visualization.',
      techStack: 'Angular, SCSS, Chart.js, Bootstrap',
      link: 'https://mahamfathy.github.io/dashboard-project/',
    },
  ];
}
