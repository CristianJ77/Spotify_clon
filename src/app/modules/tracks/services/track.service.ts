import { TrackModel } from '@core/models/tracks.model';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

constructor(private http: HttpClient ){}



private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
  return new Promise((resolve, reject) => {
    const listTmp = listTracks.filter(a => a._id !== id)
    resolve(listTmp)
  })
}


 getAllTracks$(): Observable<any> {
  return this.http.get(`${this.URL}/tracks`)
  .pipe(
    map(({ data }: any) =>{
      return data
    })
  )
 }


 getAllRandom$(): Observable<any> {
  return this.http.get(`${this.URL}/tracks`)
  .pipe(
    mergeMap(({ data }: any) => this.skipById(data, 1)),
  )
 }
 
}


