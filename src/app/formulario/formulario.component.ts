import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput:string;
  apellidoInput:string;

  constructor(
    private personasService: PersonasService
  ) {
    this.personasService.saludar.subscribe((indice) => {
      alert(`Hola ${this.personasService.personas[indice].nombre}`);
    })
  }

  agregar() {
    this.personasService.personaAgregada(new Persona(
      this.nombreInput,
      this.apellidoInput
    ));
  }
}
