import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Esta URL Obtiene todos las personas en el Backeng
  private baseURL="http://localhost:8080/persona/persona";
  private deleteURL="http://localhost:8080/persona/persona";
  
  constructor(private httpClient: HttpClient) {   }
  
  obtenerPersonaById(id:String):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}/${id}`);
  }

  obtenerListaPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }


  //Este Metodo Registrar a las Personas
  registrarPersona(persona:Persona):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,persona);
  }

  editPersona(persona:Persona): Observable<Object>{
    console.log("ESTA ENTRADO");
    return this.httpClient.put(`${this.baseURL}`,persona);
  }

  eliminarPersona(id:String):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
    this.obtenerListaPersonas();
  }

}
