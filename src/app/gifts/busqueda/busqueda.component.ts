import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtFind') txtFind!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService){

  }

  find() {
    // captiramos el valor que trael el docyumento html
    const valor = this.txtFind.nativeElement.value;

    // validacion para que cuando le demos enter, nose agrege nada
    if(valor.trim().length === 0){
      return;
    }
    this.gifsService.buscarGifs( valor );
    // lo purgamos a un string vacio
    this.txtFind.nativeElement.value = '';
  }
}
