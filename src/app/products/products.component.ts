import {Component, OnInit} from "@angular/core";
import {Product} from "../model/product";

@Component(
  { 
    selector: "app-products", 
    templateUrl: "./products.component.html", 
    styleUrls: ["./products.component.css"]
  })
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];
  most_likes: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.productsList = [
      {
        id: "1",
        title: "T-shirt 1",
        price: 18,
        quantity: 0,
        like: 0
      }, {
        id: "2",
        title: "T-shirt 2",
        price: 21,
        quantity: 10,
        like: 0
      }, {
        id: "3",
        title: "T-shirt 3",
        price: 16,
        quantity: 8,
        like: 0
      }
    ];
    
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
