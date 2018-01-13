import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Song } from './song.model';

@Injectable()
export class SongService {
  private songs: Song[] = [];

  songClicked = new EventEmitter<Song>();

  constructor(private http: Http) { }

  getSongs() {
    // Cannot return "this.songs" otherwise you return a reference to the private.
    //  Use slice to create a new copy of the array to return
    //return this.songs.slice();   // Uses locally defined, hardcoded data

    // Get songs data from JSON file on server in assets folder
    var jsonPath: string = './assets/song-data.json';

    return this.http.get(jsonPath)
      .toPromise()
      .then(res => <Song[]>res.json().songs)
      .then(data => { return data; });
  }
}
