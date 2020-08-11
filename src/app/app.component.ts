import { Component } from '@angular/core';
import { MorsePipe } from "./morse.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipeMorse';
}
