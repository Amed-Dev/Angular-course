import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    { id: 1, name: 'Product 1', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', price: 'S/100', category: 'Electronics', vendor: 'Vendor A' },
    { id: 2, name: 'Product 2', description: 'Corporis, praesentium voluptas accusamus consequatur iusto quos.', price: 'S/200', category: 'Furniture', vendor: 'Vendor B' },
    { id: 3, name: 'Product 3', description: 'Amet consectetur adipisicing elit. Corporis, praesentium voluptas.', price: 'S/300', category: 'Clothing', vendor: 'Vendor C' },
    { id: 4, name: 'Product 4', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 'S/400', category: 'Electronics', vendor: 'Vendor A' },
    { id: 5, name: 'Product 5', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.', price: 'S/500', category: 'Accessories', vendor: 'Vendor D' },
    { id: 6, name: 'Product 6', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', price: 'S/600', category: 'Books', vendor: 'Vendor E' },
    { id: 7, name: 'Product 7', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.', price: 'S/700', category: 'Furniture', vendor: 'Vendor B' },
    { id: 8, name: 'Product 8', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.', price: 'S/800', category: 'Clothing', vendor: 'Vendor C' },
    { id: 9, name: 'Product 9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt.', price: 'S/900', category: 'Accessories', vendor: 'Vendor D' },
    { id: 10, name: 'Product 10', description: 'Mauris accumsan velit ut metus viverra, vel vehicula augue tempor.', price: 'S/1000', category: 'Clothing', vendor: 'Vendor C' },
    { id: 11, name: 'Product 11', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada.', price: 'S/1100', category: 'Books', vendor: 'Vendor E' },
    { id: 12, name: 'Product 12', description: 'Cras in turpis non magna facilisis lacinia non eget ligula.', price: 'S/1200', category: 'Electronics', vendor: 'Vendor A' },
  ];
  
  constructor() {}

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
