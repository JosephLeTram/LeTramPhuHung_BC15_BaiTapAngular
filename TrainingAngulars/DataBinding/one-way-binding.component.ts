import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  template: `<div class="container">
    <h3>Demo One Way Binding</h3>
    <br />
    <h4>Interpolation (Binding từ model sang view)</h4>
    <p>Title: {{ title }}</p>
    <input value="{{ title }}" class="w-50" />
    <br />
    <h4>Property Binding</h4>
    <p [innerHTML]="title"></p>
    <input #inputValue [value]="title" />
    <hr />

    <h4>Event Bidnding</h4>
    <button class="btn btn-success" (click)="changeTitle(inputValue.value)">
      Set title
    </button>
  </div>`,
})
export class OneWayBindingComponent implements OnInit {
  //Model-View View-Model
  title: string = 'hello Cybersoft';
  name: string = '';
  constructor() {}

  ngOnInit() {}

  changeTitle(newTitle: string) {
    let abc = 'abc';
    this.name = abc;
    this.title = newTitle;
  }
}
