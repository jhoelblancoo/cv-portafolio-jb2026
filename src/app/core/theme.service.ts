import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'jb-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly theme = signal<ThemeMode>('light');

  init(): void {
    this.apply(this.resolveInitial(), false);
  }

  toggle(): void {
    this.apply(this.theme() === 'light' ? 'dark' : 'light', true);
  }

  set(mode: ThemeMode): void {
    this.apply(mode, true);
  }

  private resolveInitial(): ThemeMode {
    if (!this.isBrowser) {
      return 'light';
    }
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private apply(mode: ThemeMode, persist: boolean): void {
    this.theme.set(mode);
    if (!this.isBrowser) {
      return;
    }
    const root = this.document.documentElement;
    root.setAttribute('data-theme', mode);
    root.classList.add('theme-transition');
    window.setTimeout(() => root.classList.remove('theme-transition'), 450);
    if (persist) {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  }
}
