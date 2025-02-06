import { Component } from '@angular/core';
import { TextAreaComponent } from './text-area/text-area.component';
import { ImageAreaComponent } from './image-area/image-area.component';

@Component({
  selector: 'app-dis-hijyen-belt',
  imports: [TextAreaComponent, ImageAreaComponent],
  templateUrl: './dis-hijyen-belt.component.html',
  styleUrl: './dis-hijyen-belt.component.scss'
})
export class DisHijyenBeltComponent {

}
