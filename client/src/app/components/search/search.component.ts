import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string = '';
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[] = [];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    //TODO: call search function in spotifyService and parse response
    this.spotifyService.searchFor(this.searchCategory, this.searchString).then((data: ResourceData[]) => {
      this.resources = data;
      // Handle the response data to display in the UI
    }).catch(error => {
      console.error('Error during search:', error);
    });
  }
  onCategoryChange() {
    this.resources = []; // Clear the current search results when changing category
  }


}