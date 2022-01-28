import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreCompleto: string = 'cLau MIau';

  fecha: Date = new Date(); // día de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
