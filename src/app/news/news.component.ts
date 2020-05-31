import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild('myBox') myBox: ElementRef<HTMLElement>

  @ViewChild('header') header: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.myBox.nativeElement.innerHTML);

    // 调用子组件里的方法
    this.header.run();
  }

  getChildRun() {
    this.header.run();
  }

}