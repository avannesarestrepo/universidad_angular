import { Persona } from "./persona.model";

export class PersonasService {
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Maria', 'Gomez'),
        new Persona('Pedro', 'Gomez'),
      ];
    
    personaAgregada(persona: Persona) {
        this.personas.push(persona);
    }
}