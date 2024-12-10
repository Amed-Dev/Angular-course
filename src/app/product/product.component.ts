import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  category: string | null = null;
  page: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
      this.page = params.get('page') ? parseInt(params.get('page')!, 10) : 1;

      if (this.category) {
        this.filteredProducts = this.products.filter(
          (product) =>
            product.category.toLowerCase() === this.category!.toLowerCase()
        );
      } else {
        this.filteredProducts = [...this.products];
      }

      this.totalPages = Math.ceil(
        this.filteredProducts.length / this.itemsPerPage
      );

      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.filteredProducts = this.filteredProducts.slice(startIndex, endIndex);
    });
  }

  nextPage():void {
    if(this.page < this.totalPages){
      this.router.navigate([], {queryParams: {page: this.page + 1}, queryParamsHandling: 'merge'})
    }
  }

  previousPage(): void {
    if(this.page > 1){
      this.router.navigate([], { queryParams: { page: this.page -1 }, queryParamsHandling: 'merge'})
    }
  }
  filterByCategory(category: string): void {
    this.router.navigate(['/products'], { queryParams: { category } });
  }
  clearFilters(): void {
    this.router.navigate([], { queryParams: {} });
  }
}
