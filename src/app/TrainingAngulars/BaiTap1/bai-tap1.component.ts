import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap1',
  template: `
    <div>
      Bài Tập 1
      <app-header></app-header>
      <div class="row p-0 m-0">
        <div class="col-4 p-0 m-0">
          <app-side-bar></app-side-bar>
        </div>
        <div class="col-8 p-0 m-0">
          <app-navigation></app-navigation>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class BaiTap1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
