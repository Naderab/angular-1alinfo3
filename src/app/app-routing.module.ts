import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'offres',component:OffresEmploiComponentComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'details/:id',component:ProductsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
