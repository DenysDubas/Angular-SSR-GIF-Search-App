import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Gif } from '../../services/gif.service';

@Component({
  selector: 'app-gif-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss'],
})
export class GifDetailComponent {
  @Input() gif: Gif | null = null;
  @Input() flipped: boolean = false;

  toggleFlip() {
    this.flipped = !this.flipped;
  }

  downloadGif(gif: Gif | null) {
    if (!gif) return;
    const link = document.createElement('a');
    link.href = gif.images.original.url;
    link.download = `${gif.title}.gif`;
    link.click();
  }

  copyLink(gif: Gif | null) {
    if (!gif) return;
    navigator.clipboard.writeText(gif.images.original.url).then(() => {
      alert('Link copied to clipboard');
    });
  }
}
