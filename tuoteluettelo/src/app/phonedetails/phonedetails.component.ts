import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './phonedetails.component.html',
  styleUrls: ['./phonedetails.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  product: any;
  infrared!: boolean;
  gps!: boolean;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProdDetails();
    
  }
  getProdDetails(): void {
    let id = String(this.route.snapshot.paramMap.get('id'));
    
    this.httpClient.get("assets/phones/"+id+".json").subscribe(data => {
      /* console.log(data); */
      this.product = data;
      this.infrared = this.product.connectivity.infrared;
      this.gps = this.product.connectivity.gps;
      console.log(data);
    })
  }
  goBack(): void {
    this.location.back();
  }
  

}