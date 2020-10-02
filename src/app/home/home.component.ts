import { Component, OnInit } from '@angular/core';

import * as Swiper from 'swiper/dist/js/swiper.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  swiper: any;

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100,
      slidesPerView: 'auto',
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement: 'span',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        clickable: true,
      }
    });
  }

}
