import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;


  constructor(private loggingService : LoggingService) {

  }
  //nombreInput:string = '';
  //apellidoInput:string = '';

  agregar() {
    this.loggingService.enviarMensajeAConsola('Enviamos persona con nombre: ' +  this.nombreInput.nativeElement.value + ' y apellido: ' + this.apellidoInput.nativeElement.value);
    this.personaCreada.emit(
      new Persona(
        this.nombreInput.nativeElement.value,
        this.apellidoInput.nativeElement.value
      )
    );
  }
}
