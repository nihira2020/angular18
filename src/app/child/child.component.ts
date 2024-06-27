import { Component } from '@angular/core';
import { MaterialModule } from '../MaterialModule';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

}
