import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [];

  constructor(private loggingService: LoggingService, private personasService: PersonasService) {}

  ngOnInit(): void{
    this.personas = this.personasService.personas;
  }


  onPersonaAgregada(persona: Persona) {
    this.loggingService.enviarMensajeAConsola("personas agregada al arreglo con nombre: " + persona.nombre);
    this.personasService.personaAgregada(persona);
  }
}
