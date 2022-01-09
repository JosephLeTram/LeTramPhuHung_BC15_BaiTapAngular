import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-template",
  template: `<div class="container">
    <app-header-home></app-header-home>

    <router-outlet></router-outlet>
  </div>`,
})
export class HomeTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
