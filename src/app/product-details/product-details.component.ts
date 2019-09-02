import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  notes = [];
  info = [];
  packagingTypes = [];
  constructor(@Inject(MAT_DIALOG_DATA) private dialog: any) {}

  ngOnInit() {
    console.log(this.dialog);
    this.packagingTypes = this.dialog.packagingTypes;
    this.info = this.dialog.info;
    this.notes = this.dialog.notes;
  }
}
