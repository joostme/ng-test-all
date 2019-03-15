import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib-a',
  template: `
    <p>
      test-lib-a works!
    </p>
  `,
  styles: []
})
export class TestLibAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
