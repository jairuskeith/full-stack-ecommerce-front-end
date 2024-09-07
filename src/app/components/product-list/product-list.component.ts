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
import {FooterComponent} from "../footer/footer.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {ActivatedRoute, Params} from "@angular/router";

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
    FooterComponent,
    SearchBarComponent,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  protected products: Product[] = [];
  protected currentCategoryId: number = 1;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params): void => {
        this.listProducts();
    });
  }

  listProducts(): void {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      (data: Product[]): void => {
        this.products = data
      }
    )
  }
}
