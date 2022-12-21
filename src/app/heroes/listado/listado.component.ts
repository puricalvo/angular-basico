import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
    
   // creamos propiedades
    heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
    heroeBorrado: string = '';

    // creamos metodos
    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
      
    }

}
