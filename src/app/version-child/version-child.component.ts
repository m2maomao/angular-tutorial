import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnChanges {

  ngOnInit() {
    this.name = 'Maomao';
    console.log('初始化')
  }

  @Input() major: number;
  @Input() minor: number;
  name: string;
  changeLog: string[] = [];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('changes:', changes)
    let log: string[] = [];
    for(let propName in changes) {
      console.log('propName:', propName)
      let changedProp = changes[propName];
      console.log('changedProp:', changedProp)
      let to = JSON.stringify(changedProp.currentValue);
      if(changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}