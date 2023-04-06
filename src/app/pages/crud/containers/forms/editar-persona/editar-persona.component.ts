import  swal  from 'sweetalert2';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.scss']
})
export class EditarPersonaComponent {
  id:String;
  persona:Persona = new Persona();
  constructor(private personaService:PersonaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaService.obtenerPersonaById(this.id).subscribe(dato =>{
      this.persona = dato;
    },error => console.log(error));
  }

  goListaDePersonas(){
    this.router.navigate(['/personas']);
    //swal('Persona actualizado',`El Persona ${this.persona.id} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.personaService.editPersona(this.persona).subscribe(dato => {
      this.goListaDePersonas();
    });
  }
}
