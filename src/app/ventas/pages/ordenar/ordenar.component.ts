import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEnMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

}
