import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { DetailComponent } from "./detail/detail.component";
import { CompanyComponent } from "./company/company.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent,
    children: [
      {
        path: "",
        redirectTo: "/products/all",
        pathMatch: "full"
      },
      {
        path: ":name",
        component: DetailComponent
      }
    ]
  },
  {
    path: "product/:name",
    component: DetailComponent
  },
  {
    path: "ourcompany",
    component: CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
