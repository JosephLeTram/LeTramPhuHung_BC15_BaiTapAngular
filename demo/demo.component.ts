import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo', // tên component default
  // selector: '.demo', // tên component theo dạng class
  // selector: '[demo]', // tên component theo dạng attribute
  templateUrl: './demo.component.html', //Đường dẫn
  styleUrls: ['./demo.component.scss'], //CSS của component
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
