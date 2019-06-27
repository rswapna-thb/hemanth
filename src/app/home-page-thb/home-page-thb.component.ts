import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-page-thb',
  templateUrl: './home-page-thb.component.html',
  styleUrls: ['./home-page-thb.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HomePageTHBComponent implements OnInit {
  constructor(config: NgbCarouselConfig, private router:Router){
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }
 
  ngOnInit() {
  }
  

}

