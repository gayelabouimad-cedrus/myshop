import { Component, OnInit } from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper';
import 'swiper/swiper-bundle.css';

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
      slidesPerView: 1,
      // Optional parameters
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }

}
