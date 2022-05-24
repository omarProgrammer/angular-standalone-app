import { DOCUMENT } from "@angular/common";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, filter, first, mergeAll, Observable, take } from "rxjs";
import { Product } from "../commons";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products$: BehaviorSubject<Product[]> = new BehaviorSubject([] as Product[]);

  /**
   * @description add sample products when initializing app
   * @returns void
   */
  public init(): void {
    const currentWindow = inject(DOCUMENT).defaultView;
    const products: Product[] = [];
    let product: Product;
    for(let i=0; i<= 10; i++) {
      product = {
        id: currentWindow?.crypto?.randomUUID() ?? `${i}`,
        name: `product name ${i}`,
        description: `${i} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      }
      products.push(product);
    }
    this.products$.next(products);
  }

  /**
   * @description get an observable that contains all products
   * @returns an observable that contains all products
   */
  public getAll(): Observable<Product[]> {
    return this.products$;
  }

  /**
   * @description get product by given id
   * @param id a given product id
   * @returns an observable that contains a product that matchs the given id otherwise throws an exception
   */
  public get(id: string): Observable<Product> {
    return this.products$.pipe(
      mergeAll(),
      filter(product => product.id === id),
      first(),
    )
  }
}
