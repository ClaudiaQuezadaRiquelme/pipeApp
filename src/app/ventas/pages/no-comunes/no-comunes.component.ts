import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = "Clau Miaua";
  genero: string = 'femenino';
  nombres = [
    { nombre: 'Gatuna', genero: 'femenino'},
    { nombre: 'Oso', genero: 'masculino'},
    { nombre: 'Caracol', genero: 'neutro'},
    { nombre: 'Pelusa', genero: 'femenino'},
  ]

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'neutro': 'invitarle'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Juan', 'Solange', 'Pascual'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre() {
    const max = this.nombres.length;
    const min = 0;
    const nombreActual = this.nombre;
    let randomIndex = 0;
    do {
      randomIndex = Math.floor(Math.random() * (max - min)) + min;
    } while (nombreActual === this.nombres[randomIndex].nombre);
    this.nombre = this.nombres[randomIndex].nombre;
    this.genero = this.nombres[randomIndex].genero;
  }

  eliminarCliente() {
    this.clientes.pop();
  }
}
