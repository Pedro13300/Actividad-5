import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAfición } from '../../interfaces/iafición.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newAficion: IAfición = { titulo: '', imagen: '', texto: '', fecha: new Date('')}
  @Output() aficionLanzada: EventEmitter<IAfición> = new EventEmitter();

  guardar(): void {
    if(this.newAficion.titulo !== "" && this.newAficion.imagen !== "" && this.newAficion.texto !== "" && this.newAficion.fecha !== new Date('') ){
    this.aficionLanzada.emit(this.newAficion);
    this.newAficion = { titulo: '', imagen: '', texto: '', fecha: new Date('')};
  }else{
    alert("No se pueden dejar campos vacios")
  }

 }
}