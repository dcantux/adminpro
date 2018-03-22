import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from "../services/service.index";
import { ProfileComponent } from "./profile/profile.component";
import { UsuariosComponent } from './usuarios/usuarios.component';


const pagesRoute: Routes = [
    {
      path: '',
      component: PagesComponent,
      canActivate: [ LoginGuardGuard ],
      children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars'}},
        { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'}},
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}},
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS'}},
        { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema'}},
        { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'}},
        //Mantenimientos
        { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimientos de usuarios'}},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      ]
    }
 ];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoute );
