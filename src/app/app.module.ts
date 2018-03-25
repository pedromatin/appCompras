import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AutenticacionService } from './servicios/autenticacion.service';


import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { EditproveeComponent } from './proveedores/editprovee/editprovee.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { FacturasModule } from './facturas/facturas.module';
import { FacturasService } from './servicios/facturas.service';
import { AddfraComponent } from './facturas/facturas/addfra/addfra.component';
import { EdifraComponent } from './facturas/facturas/edifra/edifra.component';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';



const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent,
    canActivate: [GuardService] },
  { path: 'addprovee', component: AddproveeComponent,
  canActivate: [GuardService]},
  { path: 'addpres', component: AddpresComponent,
  canActivate: [GuardService] },
  { path: 'presupuestos', component: PresupuestosComponent,
  canActivate: [GuardService] },
  { path: 'editpres/:id', component: EditpresComponent,
  canActivate: [GuardService] },
  { path: 'editprovee/:id', component: EditproveeComponent,
  canActivate: [GuardService] },
  { path: 'registro', component: RegistroComponent},
  { path: 'inises', component: InisesComponent},
  { path: 'addfra', component: AddfraComponent,
  canActivate: [GuardService] },
  { path: 'facturas', component: FacturasComponent,
  canActivate: [GuardService] },
  { path: 'edifra/:id', component: EdifraComponent,
  canActivate: [GuardService] },
  { path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    AddfraComponent,
    PresupuestosComponent,
    FacturasComponent,
    EditpresComponent,
    EditproveeComponent,
    EdifraComponent,
    RegistroComponent,
    InisesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule
  ],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService, FacturasService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
