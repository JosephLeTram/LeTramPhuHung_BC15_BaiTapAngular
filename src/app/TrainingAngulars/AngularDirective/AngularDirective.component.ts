import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular-directive",
  template: `
    <div class="container" style="margin-bottom:500px">
      <h3>Bài tập: Directive 5 Login Form</h3>
      <app-bai-tap-5></app-bai-tap-5>
    </div>
  `,
})
export class AngularDirectiveComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
