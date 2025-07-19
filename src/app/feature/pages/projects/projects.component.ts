import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @Input() projectImage!: string;
  @Input() projectTitle!: string;
  @Input() projectDescription!: string;
  @Input() techStack!: string;
  @Input() projectLink!: string;
  projects = [
    {
      image: 'assets/images/project1.png',
      title: 'Website Coding',
      description: 'Built using HTML, CSS, JS',
      techStack: 'HTML, CSS, JS',
      link: 'https://yourproject1.com',
    },
    {
      image: 'assets/images/project2.png',
      title: 'Angular Dashboard',
      description: 'Admin dashboard with Angular and Material UI',
      techStack: 'Angular, TypeScript, Material UI',
      link: 'https://yourproject2.com',
    },
    {
      image: 'assets/images/project3.png',
      title: 'E-Commerce Website',
      description: 'Built with Bootstrap and Firebase',
      techStack: 'Bootstrap, Firebase, JavaScript',
      link: 'https://yourproject3.com',
    },
  ];
}
