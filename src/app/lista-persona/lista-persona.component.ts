import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.scss']
})
export class ListaPersonaComponent {
    personas: Persona[];

    constructor(private personaServicio:PersonaService){}

    ngOnInit(): void{
      this.getAllPersona();
    }
    private getAllPersona(){
      this.personaServicio.getListaPersonas().subscribe(dato =>{
        this.personas = dato;
      })
    }
}
