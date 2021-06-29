import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})



export class CitasComponent {

  pasciente: string = '';
  date: string = "";
  time: string = "";
  comentarios: string = "";

  citas: Cita[] = [

  ]

  constructor() {
    this.citas = JSON.parse(localStorage.getItem('citas') || '[]')
  }

  guardar() {
    this.citas.push(
      {
        pasciente: this.pasciente,
        fecha: this.date,
        hora: this.time,
        comentarios: this.comentarios
      }
    );

    this.modifyLS();
    Swal.fire(
      '¡Guardado correctamente!',
      '',
      'success'
    )
    this.reset();
  }

  eliminar(index: number) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "¡Esta acción no puede revertirse!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          '¡Cita eliminada correctamente!',
          'success'
        )
        this.citas.splice(index, 1);
        this.modifyLS();
      }
    })

  }

  modifyLS() {
    localStorage.setItem('citas', JSON.stringify(this.citas));
  }

  reset() {
    this.pasciente = "";
    this.date = "";
    this.time = "";
    this.comentarios = "";
  }


}

interface Cita {
  pasciente: string,
  fecha: string,
  hora: string,
  comentarios: string
}