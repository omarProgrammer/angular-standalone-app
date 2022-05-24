import { enableProdMode, ENVIRONMENT_INITIALIZER, importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { firstValueFrom, tap } from 'rxjs';
import { AppComponent } from './app/app.component';
import { AuthService } from './app/services';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app/views/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadComponent: () => import('./app/views/product').then(m => m.ProductComponent)
  }
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes)), {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => firstValueFrom(inject(AuthService).init().pipe(tap(result => console.log({result}))))
  }]
})
