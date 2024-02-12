import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { AficionesComponent } from './components/aficiones/aficiones.component';
import { IAfición } from './interfaces/iafición.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogComponent, AficionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrAficiones: IAfición[] = [
    {
      titulo: 'El fútbol',
      imagen: 'https://via.placeholder.com/150',
      texto: 'La final del mundial de sudáfrica 2010 al ganar España a Holanda 1-0',
      fecha: ('18/12/2023')
    },
    {
      titulo: 'PLAYSTATION 5',
      imagen: 'https://via.placeholder.com/150',
      texto: 'Cuando gané el torneo de Battlefield 3',
      fecha: ('20/05/2023')
    }
  ]
  insertData($event: any): void {
    this.arrAficiones.push($event)
    
  }
}
