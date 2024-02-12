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
      titulo: 'Fútbol',
      imagen: 'https://via.placeholder.com/150',
      texto: 'El dia que jugue un partido',
      fecha: ('18/12/2023')
    },
    {
      titulo: 'PLAYSTATION 5',
      imagen: 'https://via.placeholder.com/150',
      texto: 'Cuando gané al Battlefield 3',
      fecha: ('20/05/2023')
    }
  ]
  insertData($event: any): void {
    this.arrAficiones.push($event)
    
  }
}
