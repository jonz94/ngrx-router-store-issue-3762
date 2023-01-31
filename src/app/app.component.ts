import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a routerLink="/home">home</a>
    <a routerLink="/settings">settings</a>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
