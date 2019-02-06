import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: string;
  search: string = "";
  isOdd: boolean;
  odds: number[];
  evens: number[];
  constructor() { }

  ngOnInit() {
    this.isOdd = true;
    this.data = "Welcome";
    this.odds = [ 1, 3, 5, 7,9];
    this.evens = [0, 2, 4, 6, 8];   
  }
  changeOdd()
  {
    this.isOdd = !this.isOdd;
  }
}
