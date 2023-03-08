import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhoneListComponent implements OnInit {
  title = 'Tuoteluettelo';
  products: any = [];
  name = "";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/phones/phones.json").subscribe(data => {
      this.products = data;
    })
  }
  sortByNewest() {
    this.products.sort((a: any, b: any) => b.age - a.age);
  }
  sortByAlphabet() {
    this.products.sort((a:any, b:any) => a.name.localeCompare(b.name));
  }
  
  sort(event: any){
    /* console.log(event.target.value); */
    let option = event.target.value;
    if (option === "newest") {
      this.sortByNewest();
    } 
    else if (option === "alphabetical") {
      this.sortByAlphabet();
    }
  }

}