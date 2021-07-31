import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[] = [
    { titulo: 'juan peres', numeroTarjeta: 1223344512344512,  fechaExpliracion: '11/12', cvv: '123' },
    { titulo: 'juan fasd', numeroTarjeta: 1223344512344512,  fechaExpliracion: '23/12', cvv: '234' },
    { titulo: 'asdfsd peres', numeroTarjeta: 1223344512344512,  fechaExpliracion: '31/12', cvv: '426' },
    { titulo: 'peres anita', numeroTarjeta: 1223344512344512,  fechaExpliracion: '25/12', cvv: '623' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
