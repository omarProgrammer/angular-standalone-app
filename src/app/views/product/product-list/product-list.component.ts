import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Product } from "./../../../commons/models";
import { ProductService } from "./../../../services/product.service";

@Component({
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [CommonModule, RouterModule]
})
export class ProductListComponent {
  public products$ = inject(ProductService).getAll();

  public trackProduct(id: string, product: Product): string {
        return product.id
  }
}
