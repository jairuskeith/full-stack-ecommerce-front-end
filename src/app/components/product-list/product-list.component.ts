import {Component, OnInit, ViewChild} from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../common/product";
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    MatSlideToggle,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    NgOptimizedImage,
    MatPaginator,
  ],
  templateUrl: './product-list-table.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  protected products: Product[] = [];
  protected displayedColumns: string[] = ['position', 'name', 'price', 'unitsInStock'];
  protected dataSource: MatTableDataSource<Product, MatPaginator> =  new MatTableDataSource<Product>(this.products);

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(): void {
    this.productService.getProductList().subscribe(
      (data: Product[]): void => {
        this.products = data
      }
    )
  }
}
