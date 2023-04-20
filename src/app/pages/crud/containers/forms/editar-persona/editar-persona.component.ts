import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona/persona.service';


@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.scss']
})
export class EditarPersonaComponent implements OnInit {
  
  id:String;
  persona:Persona = new Persona();
  constructor(private personaService:PersonaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaService.obtenerPersonaById(this.id).subscribe(dato =>{
      this.persona = dato;
    },error => console.log("ERORR"));
  }

  goListaDePersonas(){
    this.router.navigate(['/personas']);
    //swal('Persona actualizado',`El Persona ${this.persona.id} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
      //if(this.persona.id == this.id){
        this.personaService.editPersona(this.persona).subscribe(dato => {
          this.goListaDePersonas();
        })
    };
  //}
}
