import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';


/********************************************************* */
 esPrimo(num: number, i: number = 2): boolean{
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % i === 0) return false;
  return this.esPrimo(num, i + 1);
 }

 esFibonacci(num: number, a: number = 0, b: number = 1): boolean{
  if(a === num) return true;
  if(a > num) return false;
  return this.esFibonacci(num, b, a + b);
 }

 esPar(num: number): boolean{
  return num % 2 === 0;
 }

 verificarNumero(num: number, count: number = 0, maxCount: number = 10){
  const esPrimoNum = this.esPrimo(num) ? 'es primo' : 'no es primo';
  const esFibonacciNum = this.esFibonacci(num) ? 'es fibonacci' : 'no es fibonacci';
  const esParNum = this.esPar(num) ? 'es par' : 'no es par';

  console.log(`${num} ${esPrimoNum}, ${esFibonacciNum} y ${esParNum}`);
  if (count < maxCount) {
    this.verificarNumero(num + 1, count + 1, maxCount);
  }
}

  
}
