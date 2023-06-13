import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // title:string="";
  // price:number=0;
  // quantity:number=0;
  product:Product=new Product();
  constructor(private _productService:ProductService,private _router:Router) { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.product);
    let index = this._productService.listProductsService.length;
    this.product.id = this._productService.listProductsService[index-1].id+1;
    this.product.like=0;
    this._productService.add(this.product);
   this._router.navigate(["/products"]);
    console.log(this._productService.listProductsService)
  }

}
