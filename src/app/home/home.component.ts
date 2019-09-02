import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  val: string;
  images = [
    "https://visualhunt.com/photos/1/onion-colorful-pepper-and-other-vegetables-on-kitchen-table.jpg?s=xl",
    "https://visualhunt.com/photos/1/man-holding-grapes-in-hands.jpg?s=xl"
  ];
  constructor() {
    this.changeImages();
  }

  ngOnInit() {}

  changeImages() {
    let i = 0;
    this.val = `url(${this.images[i]})`;
    setInterval(() => {
      if (i === this.images.length - 1) {
        i = 0;
      } else {
        i = ++i;
      }
      console.log(i);
      this.val = `url(${this.images[i]})`;
    }, 1500);
  }
}
