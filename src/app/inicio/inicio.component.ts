import { Component, OnInit } from '@angular/core';

import  * as Data from '../public/data/info.json';
import { estudiante } from '../public/models/estudiante';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  public listado:estudiante[] = [];

  constructor() {}

  ngOnInit(): void {
    
    this.listado = (Data as any).listado;
    console.log(this.listado);
  }
}
