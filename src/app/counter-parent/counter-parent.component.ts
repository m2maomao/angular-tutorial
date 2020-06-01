import { Component, OnInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}