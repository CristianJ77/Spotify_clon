import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  mockTrackList: Array<TrackModel> = [
   
  ]
  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
