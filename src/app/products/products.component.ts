import {Component, OnInit} from "@angular/core";
import {Product} from "../model/product";
import { ProductService } from "../services/product.service";

@Component(
  { 
    selector: "app-products", 
    templateUrl: "./products.component.html", 
    styleUrls: ["./products.component.css"]
  })
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];
  most_likes: number = 0;
  constructor(private _productService:ProductService) {}

  ngOnInit(): void {
    this.productsList = this._productService.listProductsService;
  }
  buy(p:Product){
    if(p.quantity>0){
      p.quantity--;
    }
  }
  like(p:Product){
    p.like++;
    if(p.like>this.most_likes){
      this.most_likes=p.like;
    }

  }

  
}
