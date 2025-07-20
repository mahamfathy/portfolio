import { Component } from '@angular/core';
interface Tech {
  name: string;
  iconClass: string;
}
@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
})
export class TechStackComponent {
  techStack: Tech[] = [
    { name: 'HTML', iconClass: 'devicon-html5-plain' },
    { name: 'CSS', iconClass: 'devicon-css3-plain' },
    { name: 'Sass', iconClass: 'devicon-sass-original' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
    { name: 'Angular', iconClass: 'devicon-angular-plain' },
    { name: 'Figma', iconClass: 'devicon-figma-plain' },
    { name: 'NPM', iconClass: 'devicon-npm-original-wordmark' },
    { name: 'Git', iconClass: 'devicon-git-plain' },
    { name: 'GitHub', iconClass: 'devicon-github-original' },
    { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain' },
    { name: 'Angular Material', iconClass: 'devicon-angular-plain' },
    { name: 'VS Code', iconClass: 'devicon-vscode-plain' },
    { name: 'Jira', iconClass: 'devicon-jira-plain' },
    { name: 'Docker', iconClass: 'devicon-docker-plain' },
  ];
}
