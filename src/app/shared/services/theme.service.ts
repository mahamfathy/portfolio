import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storageKey = 'isDarkMode';

  constructor() {
    const storedValue = localStorage.getItem(this.storageKey);
    if (storedValue === 'true') {
      this.applyDarkMode(true);
    } else {
      this.applyDarkMode(false);
    }
  }

  toggleTheme(): void {
    const isDark = document.body.classList.contains('dark-theme');
    this.applyDarkMode(!isDark);
    localStorage.setItem(this.storageKey, (!isDark).toString());
  }

  private applyDarkMode(enable: boolean): void {
    const classList = document.body.classList;
    if (enable) {
      classList.add('dark-theme');
    } else {
      classList.remove('dark-theme');
    }
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('dark-theme');
  }
}
