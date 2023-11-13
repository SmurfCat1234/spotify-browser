import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData;

  constructor() { }

  ngOnInit() {
  }

  getRouterLink(resource: ResourceData): string[] {
    switch(resource.category) {
      case 'artist':
        return ['/artist/'+ resource.id];
      case 'album':
        return ['/album/'+ resource.id];
      case 'track':
        return ['/track/'+ resource.id];
      default:
        return ['/']; // default route
    }
  }
}
