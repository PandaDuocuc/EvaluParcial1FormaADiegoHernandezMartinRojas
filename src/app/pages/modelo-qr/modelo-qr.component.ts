import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modelo-qr',
  templateUrl: './modelo-qr.component.html',
  styleUrls: ['./modelo-qr.component.scss'],
})
export class ModeloQrComponent {
  qrData: string = 'Se ha guardado su asistencia con éxito'; // Valor del QR

  constructor(
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }
}
