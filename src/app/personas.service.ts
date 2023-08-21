import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Maria', 'Gomez'),
        new Persona('Pedro', 'Gomez'),
      ];
     
    constructor(private loggingService: LoggingService) {}
     
    personaAgregada(persona: Persona) {
        this.loggingService.enviarMensajeAConsola("aagregamos persona: " + persona.nombre);
        this.personas.push(persona);

    }
}
