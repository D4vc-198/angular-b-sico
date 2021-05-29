import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan','Hulk', 'Thor', 'Capitán América', 'Batman'];
  heroesBorrados: string = '';

  borrarHeroe(){
    this.heroesBorrados = this.heroes.shift() || '';
  }

}
