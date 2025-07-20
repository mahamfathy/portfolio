import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('typingText', { static: true }) typingText!: ElementRef;

  texts: string[] = ['Maha Fathy'];
  index = 0;
  charIndex = 0;
  isDeleting = false;

  ngAfterViewInit(): void {
    this.startTyping();
  }

  startTyping() {
    const currentText = this.texts[this.index];
    const el = this.typingText.nativeElement;

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    el.textContent = currentText.substring(0, this.charIndex);

    let typingSpeed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typingSpeed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.index = (this.index + 1) % this.texts.length;
      typingSpeed = 500;
    }

    setTimeout(() => this.startTyping(), typingSpeed);
  }
}
