import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../product.service'; // Importar el servicio

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = "";
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService // Inyectar el servicio
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      const id = parseInt(this.productId, 10); // Convertir el id a número
      this.product = this.productService.getProductById(id);
    }
  }
}

