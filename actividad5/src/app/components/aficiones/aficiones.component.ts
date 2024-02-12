import { Component, Input } from '@angular/core';
import { IAfición } from '../../interfaces/iafición.interface';

@Component({
  selector: 'app-aficiones',
  standalone: true,
  imports: [],
  templateUrl: './aficiones.component.html',
  styleUrl: './aficiones.component.css'
})
export class AficionesComponent {
  @Input() aficion: IAfición[] = [];
  ngOnInit(): void {
    this.cargarAficiones()
  }
  cargarAficiones(): any {
    let html = "";
    this.aficion.forEach(aficion => {
      html +=  `<article>
                  <h3>${aficion.titulo}</h3>
                  <img src="${aficion.imagen}" alt="${aficion.titulo}">
                  <p>${aficion.texto}</p>
                  <p>${aficion.fecha}</p>
                </article>`;
    });
    return html;
  }
}