import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoHeaderComponent } from "./demo-header/demo-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web_demo';
}
