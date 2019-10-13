import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-tbl',
  templateUrl: './multi-tbl.component.html',
  styleUrls: ['./multi-tbl.component.css']
})
export class MultiTblComponent implements OnInit {
  
  private muls: Array<number> = new Array();
  private len: Array<number> = new Array();

  constructor() { }

  ngOnInit() {
    this.muls = Array(8).fill(0).map((x, i) => i+2);  // 단 2~9
    this.len = Array(9).fill(0).map((x,i) => i+1);    // 길이 1~9
  }

}
