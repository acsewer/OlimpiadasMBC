import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  @Input() public titulo: string; 
  @Input() public estudiantes: string[] = [];
  @Input() public activa: boolean;
 
  constructor() { }

  ngOnInit(): void {
  }

}
