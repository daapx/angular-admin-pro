import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @Input()
  porcentaje: number = 40;

  @Output()
  valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get getPocentaje(){
    return `${this.porcentaje}%`;
  }

  cambiarValor(val:number){
    if(this.porcentaje>=100 && val>0){
      this.porcentaje = 100;
    } else if (this.porcentaje<=0 && val<0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje += val;
    }
    this.valorSalida.emit(this.porcentaje);
  }
}
