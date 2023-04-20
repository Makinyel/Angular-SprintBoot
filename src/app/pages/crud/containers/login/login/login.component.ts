import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  persona: Persona[];
  
  id: string;
  password: string;

  constructor(private personaSevice: PersonaService,private router:Router) {}

  login() {
    console.log(this.id);
    console.log(this.password);

    
  }
  
  registar() {
    this.router.navigate(['registar-persona']);
  }
}
