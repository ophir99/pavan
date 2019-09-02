import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input()
  data;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(ProductDetailsComponent, {
      data: this.data,
      maxHeight: "600px"
    });
  }
}
