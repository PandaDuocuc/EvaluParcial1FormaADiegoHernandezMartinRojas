import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Mensaje temporal, después de 2 segundos redirige a inicio de sesión
    setTimeout(() => {
      this.router.navigate(['/inicio-de-sesion']);
    }, 2000);  // 2 segundos
  }
}
