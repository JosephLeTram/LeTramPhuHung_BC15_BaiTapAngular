import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  template: ` <div class="div-side-bar">Side-bar</div> `,
  styles: [
    `
      .div-side-bar {
        background-color: orange;
        color: white;
        text-align: center;
        height: 75vh;
      }
    `,
  ],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
