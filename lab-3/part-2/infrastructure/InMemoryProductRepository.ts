import { ProductRepository } from "../domain/ProductRepository";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  addProduct(name: string, price: number, quantity: number) {}

  removeProduct(id: number) {}

  getProduct(id: number): Product | undefined {}

  getAllProducts(): Product[] {}

  modifyNameProduct(id: number, newName: string) {}

  modifyPriceProduct(id: number, newPrice: number) {}

  modifyQuantityProduct(id: number, newQuantity: number) {}
}

export class DatabaseProductRepository implements ProductRepository {
  private products: Product[] = [];

  addProduct(name: string, price: number, quantity: number) {}

  removeProduct(id: number) {}

  getProduct(id: number): Product | undefined {}

  getAllProducts(): Product[] {}

  modifyNameProduct(id: number, newName: string) {}

  modifyPriceProduct(id: number, newPrice: number) {}

  modifyQuantityProduct(id: number, newQuantity: number) {}
}
