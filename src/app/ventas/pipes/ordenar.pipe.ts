import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], ordenarPor: string = ''): Heroe[] {

    switch (ordenarPor) {
      case 'nombre':
        return value.sort((a, b) => {
          if (a.nombre > b.nombre) {
            return 1;
          }
          if (a.nombre < b.nombre) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        break;
      
      case 'color':
        return value.sort((a, b) => {
          if (a.color > b.color) {
            return 1;
          }
          if (a.color < b.color) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });

      case 'vuela':
        return value.sort((a, b) => {
          if (a.vuela > b.vuela) {
            return -1;
          }
          if (a.vuela < b.vuela) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
    
      default:
        return value;
        break;
    }
    
  }

}
