import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modelo-qr',
  templateUrl: './modelo-qr.component.html',
  styleUrls: ['./modelo-qr.component.scss'],
})
export class ModeloQrComponent implements OnInit {
  qrData: string = 'Se ha guardado su asistencia con éxito'; // Valor del QR
  message: string = 'Asistencia registrada correctamente';

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    // Intenta obtener el mensaje de los parámetros de la ruta
    const routeMessage = this.route.snapshot.paramMap.get('mensaje');
    if (routeMessage) {
      this.message = routeMessage;
    }
    console.log('Mensaje mostrado:', this.message);
  }

  goBack() {
    this.location.back();
  }
}
