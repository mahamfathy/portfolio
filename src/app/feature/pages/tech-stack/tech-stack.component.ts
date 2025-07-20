import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

interface Tech {
  name: string;
  iconClass: string;
}

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition('hidden => visible', [
        query(
          'span',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger(100, [
              animate(
                '600ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class TechStackComponent implements OnInit {
  animationState: 'hidden' | 'visible' = 'hidden';

  @ViewChild('stackIcons') stackIcons!: ElementRef;

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

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => this.checkIfInView(), 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkIfInView();
  }

  checkIfInView() {
    if (!this.stackIcons) return;
    const rect = this.stackIcons.nativeElement.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight - 100;
    if (isVisible && this.animationState !== 'visible') {
      this.animationState = 'visible';
    }
  }
}
