import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <div class="div-header">Header Component</div> `,
  styles: [
    `
      .div-header {
        background-color: red;
        padding: 15px;
        text-align: center;
        color: white;
        font-size: 20px;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
