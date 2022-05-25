import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';

export const routes: Routes = [
	{
		path: '',
		component: ProductComponent,
		children: [
			{
				path: '',
				loadComponent: () => import('./product-list').then(m => m.ProductListComponent),
				pathMatch: 'full'
			},
			{
				path: 'detail/:id',
				loadComponent: () => import('./product-detail').then(m => m.ProductDetailComponent)
			}
		]
	}
];
