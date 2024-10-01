import { Injectable } from '@angular/core';

export interface Person {
  nombre:string;
  ci:string;
  telefono:number;
  direccion:string;
  correo:string;
  contraseña:string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personas: Person[] = [];
  private nextId = 1;

  constructor() { }
  getPersonas(): Person[]{
    return this.personas;
  }
  addPersona(nombre:string,ci:string,telefono:number,direccion:string,correo:string,contraseña:string){
    const nuevaPersona: Person = 
  }
  
}
