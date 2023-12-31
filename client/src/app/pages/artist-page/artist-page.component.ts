import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
	artistId:string;
	artist:ArtistData;
	relatedArtists:ArtistData[];
	topTracks:TrackData[];
	albums:AlbumData[];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
  	this.artistId = this.route.snapshot.paramMap.get('id');
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums

    this.spotifyService.getArtist(this.artistId).then(artist => this.artist = artist);
    this.spotifyService.getTopTracksForArtist(this.artistId).then(tracks => this.topTracks = tracks);
    this.spotifyService.getAlbumsForArtist(this.artistId).then(albums => this.albums = albums);
    this.spotifyService.getRelatedArtists(this.artistId).then(artists => this.relatedArtists = artists);
   }

}