import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioDeSesionComponent } from './inicio-de-sesion/inicio-de-sesion.component';
import { PrincipalDocenteComponent } from './principal-docente/principal-docente.component';
import { PrincipalAlumnoComponent } from './principal-alumno/principal-alumno.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno/detalle-asignatura-alumno.component';
import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente/detalle-asignatura-docente.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { DetalleAsignaturaDocente2Component } from './detalle-asignatura-docente2/detalle-asignatura-docente2.component';
import { DetalleAsignaturaAlumno2Component } from './detalle-asignatura-alumno2/detalle-asignatura-alumno2.component';
import { RegistroComponent } from './registro/registro.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ModeloQrComponent } from './modelo-qr/modelo-qr.component';


@NgModule({
  declarations: [
    InicioDeSesionComponent,
    PrincipalDocenteComponent,
    PrincipalAlumnoComponent,
    RestablecerContrasenaComponent,
    DetalleAsignaturaAlumnoComponent,
    DetalleAsignaturaAlumno2Component,
    DetalleAsignaturaDocenteComponent,
    DetalleAsignaturaDocente2Component,
    RegistroComponent,
    CerrarSesionComponent,
    ModeloQrComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    QRCodeModule
]
})
export class PagesModule { }
