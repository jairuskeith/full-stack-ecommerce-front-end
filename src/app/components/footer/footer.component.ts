import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
