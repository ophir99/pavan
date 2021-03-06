import { Component, OnInit } from "@angular/core";
import { ProductDetailsService } from "../product-details.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { of } from "rxjs";
@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  data = [];
  constructor(
    private dataService: ProductDetailsService,
    private route: ActivatedRoute
  ) {
    this.init();
  }

  ngOnInit() {}

  init() {
    this.route.params
      .pipe(
        map(param =>
          param.name !== "all"
            ? this.dataService.data.filter(el => el.type === param.name)
            : this.dataService.data
        )
      )
      .subscribe(data => {
        this.data = data;
      });
  }
}
