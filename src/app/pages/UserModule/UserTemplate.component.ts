import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-template",
  template: `<div class="row">
    <div class="col-6 m-0 p-0">
      <img src="https://i.pravatar.cc/200/200" />
    </div>
    <div class="col-6 m-0 p-0">
      <router-outlet></router-outlet>
    </div>
  </div>`,
})
export class UserTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
