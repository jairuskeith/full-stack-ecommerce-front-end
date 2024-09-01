import { Component, OnInit } from '@angular/core';
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
  MatTable
} from "@angular/material/table";

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
  ],
  templateUrl: './product-list-table.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  protected products: Product[] = [];

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
