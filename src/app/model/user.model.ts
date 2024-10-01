import { Person } from "./person.model";

export class User extends Person {
    private id:string;
    private rol:string;

    constructor (nombre:string,ci:string,telefono:number,direccion:string,correo:string,contraseña:string,id:string,rol:string){
        super(nombre,ci,telefono,direccion,correo,contraseña);
        this.id=id;
        this.rol=rol
    }
    getNombreUser() {
        return this.getNombre()
    }
    getId() {
        return this.id;
      }
    
      setId(id: string) {
        this.id = id;
      }
    
      getRol() {
        return this.rol;
      }
    
      setRol(rol: string) {
        this.rol = rol;
      }
}