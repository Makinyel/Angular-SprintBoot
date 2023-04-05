import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona';
//import { PersonaService } from 'src/app/service/persona.service';
import  {PersonaService} from '../../../../../service/persona.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.scss']
})
export class RegistrarPersonaComponent {
  persona: Persona = new Persona();
    constructor(private personaSevice:PersonaService, private router:Router){}

    ngOnInit(): void{
      
    }
    
    registarPersona(){
      this.personaSevice.registrarPersona(this.persona).subscribe(dato =>{
        console.log(dato);
        this.goLista(); 
      },error => console.log(error));
    }

    goLista(){
      this.router.navigate(['/personas'])
    }


    onSubmit(){
      this.registarPersona();
      console.log(this.persona);
    }
}
