import {Component} from '@angular/core';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-wrapper-element',
  standalone: true,
  imports: [
    MatCard
  ],
  templateUrl: './wrapper-element.component.html',
  styleUrl: './wrapper-element.component.css'
})
export class WrapperElementComponent {

}
