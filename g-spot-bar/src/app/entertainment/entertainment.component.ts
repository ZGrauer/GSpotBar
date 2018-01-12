import { Component, OnInit, Input } from '@angular/core';
import { Song } from './song.model';
import { SongService } from './song.service';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
  providers: [SongService]
})
export class EntertainmentComponent implements OnInit {
    dataSource: Song[];
    songs: Song[];
    loading: boolean;
    totalRecords: number;

  constructor(private songService:SongService) { }

  ngOnInit() {
      this.loading = true;
      //setTimeout(() => {
    //        this.songService.getSongs().then(songs => this.songs = songs);
    //        this.loading = false;
    //    }, 1000);

        this.songService.getSongs().then(songs => {
            this.dataSource = songs;
            this.totalRecords = this.dataSource.length;
            this.songs = this.dataSource.slice(0, 30);
        });
  }

  loadSongsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
        if(this.dataSource) {
            this.songs = this.dataSource.slice(event.first, (event.first + event.rows));
        }
    }

}
