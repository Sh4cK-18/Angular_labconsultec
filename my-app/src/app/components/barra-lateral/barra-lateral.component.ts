import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent {
 @Input() asideText: string = '';
 @Input() registerText: string = '';

 isInLoginComponent: boolean;

 

 constructor() {
  this.asideText = 'Aside';
  this.registerText = 'Register';
  this.isInLoginComponent = false;
 }
}
