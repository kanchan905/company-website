import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  constructor(private readonly router: Router) {}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.activeDropdown = null;
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
  }

  toggleDropdown(menuName: string): void {
    this.activeDropdown = this.activeDropdown === menuName ? null : menuName;
  }

  isRouteGroupActive(paths: string[]): boolean {
    const currentPath = this.router.url.split('?')[0].split('#')[0];
    return paths.some((path) => currentPath === path || currentPath.startsWith(`${path}/`));
  }
}