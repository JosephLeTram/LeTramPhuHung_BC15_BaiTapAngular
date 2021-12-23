import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: ` <div class="div-navigation">Content Navigation</div> `,
  styles: [
    `
      .div-navigation {
        background-color: green;
        color: white;
        text-align: center;
        height: 75vh;
      }
    `,
  ],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
