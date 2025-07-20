import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
  animations: [
    trigger('fadeInFromLeft', [
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(-100px)' })),
      transition('hidden => visible', animate('1000ms ease-out')),
    ]),
  ],
})
export class SingleProjectComponent {
  @Input() project!: {
    image: string;
    title: string;
    description: string;
    techStack: string;
    link: string;
  };
  animationState: 'visible' | 'hidden' = 'hidden';

  @ViewChild('projectCard', { static: true }) card!: ElementRef;

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const rect = this.card.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      this.animationState = 'visible';
    }
  }
}
