import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() resultado = new EventEmitter<number>();

  operadorA: number = 0;
  operadorB: number = 0;

  calcular(){
    this.resultado.emit(this.operadorA + this.operadorB);
  }
}
