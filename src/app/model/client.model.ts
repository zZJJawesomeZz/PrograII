import { Person } from "./person.model";

export class Client extends Person{
    private consulta?:string;
    private saldo?:number;

    constructor(nombre:string,ci:string,telefono:number,direccion:string,correo:string,contraseña:string,consulta:string,saldo:number){
    super(nombre,ci,telefono,direccion,correo,contraseña);
    this.consulta=consulta;
    this.saldo=saldo;
    }
    getConsulta(){
        return this.consulta;
    }
    setConsulta(consulta:string){
        this.consulta = consulta;
    }
    getSaldo(){
        return this.saldo;
    }
    setSaldo(saldo:number){
        this.saldo = saldo;
    }
}
