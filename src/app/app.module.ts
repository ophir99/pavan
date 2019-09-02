import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatModule } from "./mat.module";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { FruitsDetailsComponent } from "./fruits-details/fruits-details.component";
import { FooterComponent } from "./footer/footer.component";
import { DetailComponent } from "./detail/detail.component";
import { CompanyComponent } from "./company/company.component";
import { ProductComponent } from "./product/product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    FruitsDetailsComponent,
    FooterComponent,
    DetailComponent,
    CompanyComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsComponent]
})
export class AppModule {}
