import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

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
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.product);
  }

}
