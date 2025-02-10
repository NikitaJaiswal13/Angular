import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-address',
  templateUrl: './author-address.component.html',
  styleUrl: './author-address.component.css'
})
export class AuthorAddressComponent {
  @Input() address : string
}
