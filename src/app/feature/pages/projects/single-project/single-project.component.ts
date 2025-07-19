import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent {
  @Input() project!: {
    image: string;
    title: string;
    description: string;
    techStack: string;
    link: string;
  };
}
