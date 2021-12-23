import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <div class="div-footer">Footer Component</div> `,
  styles: [
    `
      .div-footer {
        background-color: purple;
        color: white;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
