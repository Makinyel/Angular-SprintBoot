import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona/persona.service';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.scss'],
})
export class ListaPersonaComponent {
  personas: Persona[];
  dataSource: Persona[] = [];

  constructor(private personaSevice: PersonaService, private router: Router) {}
  filterUser = '';

  ngOnInit(): void {
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

  public registar(){
    this.router.navigate(['registar-persona']);
  }

  private obtenerAllPersona() {
    this.personaSevice.obtenerListaPersonas().subscribe((dato) => {
      this.personas = dato;
    });
  }

  editPersona(persona: Persona) {
    this.router.navigate(['editar-persona', persona]);
  }
  eliminarPersona(id: String) {
    this.personaSevice.eliminarPersona(id).subscribe((dato) => {
      console.log('ESTA ENTRANDO' + dato);
      this.obtenerAllPersona();
    });
  }
}
