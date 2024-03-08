import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  //probar el unit test multiplos pasando numero como parametro
  multiplos(numero: number): string | number {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return 'fizzbuzz';
    } else if (numero % 3 === 0) {
      return 'Fizz';
    } else if (numero % 5 === 0) {
      return 'Buzz';
    } else {
      return numero;
    }
  }

  //retorna por consola
  consoleLog(numero: number): void {
    console.log(this.multiplos(numero));
  }
  
}
