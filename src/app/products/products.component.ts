import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  links = [
    {
      param: "all",
      label: "All"
    },
    {
      param: "fruit",
      label: "Fruits"
    },
    {
      param: "vegetable",
      label: "Vegetables"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
