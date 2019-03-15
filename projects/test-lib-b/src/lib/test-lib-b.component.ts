import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib-b',
  template: `
    <p>
      test-lib-b works!
    </p>
  `,
  styles: []
})
export class TestLibBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
