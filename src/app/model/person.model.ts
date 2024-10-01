export class Person {
     nombre?:string;
     ci?:string;
     telefono?:number;
     direccion?:string;
     correo?:string;
     contraseña?:string;
    constructor(nombre:string,ci:string,telefono:number,direccion:string,correo:string,contraseña:string){
    this.nombre=nombre;
    this.ci=ci;
    this.telefono=telefono;
    this.direccion=direccion;
    this.correo=correo;
    this.contraseña=contraseña;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    
    getCi(){
        return this.ci; 
    }
    setCi(ci:string){
        this.ci=ci;
    }
    getTelefono(){
        return this.telefono;
    }
    setTelefono(telefono:number){
        this.telefono = telefono;
    }
    getDireccion(){
        return this.direccion;
    }
    setDireccion(direccion:string){
        this.direccion = direccion;
    }
    getCorreo(){
        return this.correo;
    }
    setCorreo(correo:string){
        this.correo=correo;
    }
    getContraseña(){
        return this.contraseña
    }
    setContraseña(contraseña:string){
        this.contraseña=contraseña
    }
}
