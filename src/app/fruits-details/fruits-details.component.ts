import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-fruits-details",
  templateUrl: "./fruits-details.component.html",
  styleUrls: ["./fruits-details.component.css"]
})
export class FruitsDetailsComponent implements OnInit {
  @Input()
  flex;
  constructor() {}

  ngOnInit() {}
}
