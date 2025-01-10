import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <h3>Counter : {{ counter }}</h3>

    <button class="btn btn-secondary" (click)="increaseBy(1)">+1</button>
    <button class="btn btn-secondary mx-2" (click)="reset()">Reset</button>
    <button class="btn btn-secondary" (click)="increaseBy(-1)">-1</button>
    <hr>
  `,
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
