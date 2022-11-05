import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults: TrackModel[] = []

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    //TODO: agarras el termino y sabes que solo se ejecuta cuando tiene 3 caracters
    console.log('Estoy en el padre...', event);
    this.searchService.searchTracks$(event)
    .subscribe(({ data }) => {
      this.listResults = data;
    })
  }
}
