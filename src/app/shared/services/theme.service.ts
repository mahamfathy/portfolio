import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkmode = false;
  constructor() {}
  toggleTheme(): void {
    this.darkmode = !this.darkmode;
    const classList = document.body.classList;
    if (this.darkmode) {
      classList.add('dark-theme');
    } else {
      classList.remove('dark-theme');
    }
  }
  isDarkMode(): boolean {
    return this.darkmode;
  }
}
