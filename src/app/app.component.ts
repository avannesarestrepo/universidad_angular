import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app-modularizado';

  resultado = 0;

  procesarResultado(resultadoOperacion: number){
      this.resultado = resultadoOperacion;
  }
}
