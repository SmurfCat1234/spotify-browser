import { Component, Input, OnInit } from '@angular/core';
//import { TrackFeature } from '../../data/track-feature';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() featureName: string;
  @Input() featurePercentage  : number;
  @Input() featureColor: string;
  
  constructor() { }

  ngOnInit() {
  
  }

  getProgressBarStyle() {
    return {
      'background-color': this.featureColor,
      'width': `${this.featurePercentage}%`
    };
  }
  getPercentageString() {
    return `${Math.round(this.featurePercentage)}%`;
  }
}
