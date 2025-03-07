import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gif } from '../../services/gif.service';
import { CommonModule } from '@angular/common';
import { GifDetailComponent } from '../gif-detail/gif-detail.component';

@Component({
  selector: 'app-gif-list',
  imports: [CommonModule, GifDetailComponent],
  standalone: true,
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss'],
})
export class GifListComponent {
  @Input() gifs: Gif[] = [];
  @Output() gifSelected = new EventEmitter<Gif>();
  selectedGif: Gif | null = null;

  selectGif(gif: Gif) {
    this.selectedGif = gif;
    this.gifSelected.emit(gif);
  }
}
