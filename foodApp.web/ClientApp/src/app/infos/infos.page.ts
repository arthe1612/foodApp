import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {

  apiUrl: string="https://fr.openfoodfacts.org/api/v0/produit/";
  endOfFile: string = ".json";
  apiCall: string = "";
  code: string="";

  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.code = params['code'];
    })
    this.apiCall = this.apiUrl + this.code + this.endOfFile;
  }

  ngOnInit() {
  }

}
