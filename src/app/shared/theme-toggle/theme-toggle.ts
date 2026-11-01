import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  readonly themeService = inject(ThemeService);

  readonly label = computed(() =>
    this.themeService.theme() === 'light'
      ? $localize`:@@theme.toDark:Cambiar a tema oscuro`
      : $localize`:@@theme.toLight:Cambiar a tema claro`,
  );

  toggle(): void {
    this.themeService.toggle();
  }
}
