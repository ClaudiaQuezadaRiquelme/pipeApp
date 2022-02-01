import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color): string {
    switch (value) {
      case Color.azul:
        return 'Azul'
        break;
      case Color.negro:
        return 'Negro'
        break;
      case Color.rojo:
        return 'Rojo'
        break;
      case Color.verde:
        return 'Verde'
        break;
      default:
        return ''
        break;
    }
  }

}
