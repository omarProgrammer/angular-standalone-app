import { enableProdMode, ENVIRONMENT_INITIALIZER, importProvidersFrom, Inject, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { firstValueFrom, tap } from 'rxjs';
import { AppComponent } from './app/app.component';
import { ProductService } from './app/services';
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
    loadChildren: () => import('./app/views/product').then(m => m.routes)
  }
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes)), {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => {
      const productService = inject(ProductService);
      productService.init()
    }
  }]
})
