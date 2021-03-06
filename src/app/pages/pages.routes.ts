import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard, VerificaTokenGuard } from "../services/service.index";
import { ProfileComponent } from "./profile/profile.component";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from "./medicos/medicos.component";
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from "./busqueda/busqueda.component";
import { AdminGuard } from '../services/service.index';


const pagesRoute: Routes = [
    {
      path: 'dashboard', 
      component: DashboardComponent,
      canActivate: [ VerificaTokenGuard ],
      data: { titulo: 'Dashboard'}

    },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars'}},
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'}},
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}},
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS'}},
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema'}},
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'}},
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador'}},

    //Mantenimientos
    { path: 'usuarios',
      component: UsuariosComponent,
      canActivate: [ AdminGuard ],
      data: { titulo: 'Mantenimientos de usuarios'}
    },

    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimientos de Hospitales'}},
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimientos de Medicos'}},
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Medico'}},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
 ];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoute );
