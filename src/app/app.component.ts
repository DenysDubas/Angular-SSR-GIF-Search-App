import { Component } from '@angular/core';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  imports: [SearchComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gif-search-app';
}
