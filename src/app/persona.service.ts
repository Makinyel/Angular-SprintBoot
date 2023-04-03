import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Esta URL Obtiene todos las personas en el Backeng
  private baseURL="http://localhost:8080/persona/personaAll";
  constructor(private httpClient: HttpClient) {   }

  getListaPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>('${this.baseURL}');
  }
  
}
