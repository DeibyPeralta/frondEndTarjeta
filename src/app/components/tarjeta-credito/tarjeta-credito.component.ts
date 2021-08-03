import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[] = [
    { titular: 'juan peres', numeroTarjeta: 1223344512344512,  fechaExpliracion: '11/12', cvv: '123' },
    { titular: 'juan fasd', numeroTarjeta: 1223344512344512,  fechaExpliracion: '23/12', cvv: '234' },
    { titular: 'asdfsd peres', numeroTarjeta: 1223344512344512,  fechaExpliracion: '31/12', cvv: '426' },
    { titular: 'peres anita', numeroTarjeta: 1223344512344512,  fechaExpliracion: '25/12', cvv: '623' }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta:['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpliracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  agregar(){
    const tarjetas: any ={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpliracion: this.form.get('fechaExpliracion')?.value,
      cvv: this.form.get('cvv')?.value
    }

    //this.toastr.success('La tarjeta fue registrada con exito', 'Tarjeta registrada!');
    this.listTarjetas.push(tarjetas);

    this.form.reset();
  }

  eliminarTarjeta(index: number){
    console.log(index);
    this.listTarjetas.splice(index, 1);
  }
}
