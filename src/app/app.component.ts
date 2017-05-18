import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <character-list></character-list>
  `
})
export class AppComponent {
  title: string  = 'Star Wars Characters';
}
