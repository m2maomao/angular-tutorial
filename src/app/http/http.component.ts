import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  public list: any[] = [];
  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
  }

  getData() {
    let api = "https://cnodejs.org/api/v1/topics";
    this.http.get(api).subscribe((data: any) => {
      this.list = data.data;
    })
  }

  doLogin() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    // 存在跨域
    const api = 'http://127.0.0.1:3000/dologin';
    this.http.post(api, {"username": "张三", "age": 20}, httpOptions).subscribe(res => {
      console.log(res)
    })
    
  }
}