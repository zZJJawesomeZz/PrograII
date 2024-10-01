import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Person } from "./model/person.model";
import { User } from "./model/user.model";
import { Client } from "./model/client.model";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  userArray: User[] = [];
  usuario: User = new User('', '', 0, '', '', '', '', '');
  
  addUser(){
    this.userArray.push(this.usuario);
    this.usuario = new User('', '', 0, '', '', '', '', ''); // Limpiar el objeto usuario
  }
  deleteUser(index:number){
    this.userArray.splice(index,1);
  }
}
