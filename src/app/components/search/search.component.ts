import { Component, OnInit } from '@angular/core';
import { Gif, GifService } from '../../services/gif.service';
import { Observable } from 'rxjs';
import { GifListComponent } from '../gif-list/gif-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, GifListComponent],
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string = '';
  gifs$!: Observable<Gif[]>;
  selectedGif: Gif | null = null;
  searchInput: any;

  constructor(private gifService: GifService) {}

  ngOnInit() {
    this.gifs$ = this.gifService.searchGifs('cool');
  }

  searchGifs() {
    this.gifs$ = this.query.trim()
      ? this.gifService.searchGifs(this.query)
      : this.gifService.searchGifs('cool');
  }


  showDetails(gif: Gif) {
    this.selectedGif = gif;
  }
}
