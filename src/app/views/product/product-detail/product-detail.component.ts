import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import {  first, Observable, pluck, switchMap, tap } from "rxjs";
import { Product } from "src/app/commons";
import { ProductService } from "src/app/services";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent{
  public product$: Observable<Product>;

  constructor(route: ActivatedRoute, productService: ProductService){
   this.product$ =  route.params.pipe(
     pluck('id'),
     first(),
     switchMap(id => productService.get(id))
   )
  }
}
