import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../common/product";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map((response: GetResponse) => response._embedded.products)
    )
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
