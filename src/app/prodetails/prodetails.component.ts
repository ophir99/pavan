import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-prodetails",
  templateUrl: "./prodetails.component.html",
  styleUrls: ["./prodetails.component.css"]
})
export class ProdetailsComponent implements OnInit, OnChanges {
  packagingTypes;
  info;
  notes;
  @Input()
  data;
  constructor() {}
  ngOnInit() {}
  ngOnChanges() {
    this.packagingTypes = this.data.packagingTypes;
    this.info = this.data.info;
    this.notes = this.data.notes;
  }
}
