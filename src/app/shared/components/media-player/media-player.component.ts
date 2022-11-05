import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programacion reactiva!

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status => this.state = status)
    this.listObservers$ = [observer1$]
  }


  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('BOOM!');
  }

}

