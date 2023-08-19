import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{
  nombre: string = 'vanes';
  apellido: string = 'perez';
  edad: number = 28; 
}
