import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-home',
  standalone: true,
  imports: [],
  templateUrl: './demo-home.component.html',
  styleUrl: './demo-home.component.css'
})
export class DemoHomeComponent {
   //red button text change
   intButtonTxt= 'launch';
   activeButtonTxt = 'deactivate';
   buttonText = this.intButtonTxt;
 
   //logo transform
   pacexImg = './assets/images/spacex_bg.jpg'
   gifImg = './assets/images/star_hope.gif'; // Replace with your GIF path
   logImg = "./assets/images/logo_stem__2.svg"
   currentImg = this.logImg;
 
   toggleFormat = 'rounded-5';

     //method for transformation of logo
  toggleImage(){
    this.currentImg = this.currentImg === this.gifImg ? 
    this.logImg : this.gifImg;

    this.buttonText = this.buttonText === this.intButtonTxt ? 
    this.activeButtonTxt : this.intButtonTxt;

    this.toggleFormat = this.toggleFormat === 'rounded-5' ?
    '' : 'rounded-5';
  }

}
