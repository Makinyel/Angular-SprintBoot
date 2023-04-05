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

    constructor(private personaSevice:PersonaService){}

    ngOnInit(): void{
      /*this.personas = [{
        "id":"543",
        "nombre":"Angel",
        "apellido":"espinosa",
        "ubicacion":"ees",
        "telefono":"304",
        "email":"da@",
        "rol":"admin"
      }]*/
      this.obtenerAllPersona();
    }

    private obtenerAllPersona(){
      this.personaSevice.obtenerListaPersonas().subscribe(dato =>{
        this.personas = dato;
      })
    }
}
