import { Component, OnInit } from "@angular/core";
import { ProductDetailsService } from "../product-details.service";

@Component({
  selector: "app-moredetails",
  templateUrl: "./moredetails.component.html",
  styleUrls: ["./moredetails.component.css"]
})
export class MoredetailsComponent implements OnInit {
  data;

  constructor(private dataService: ProductDetailsService) {
    this.data = this.dataService.data;
  }

  ngOnInit() {}
}
