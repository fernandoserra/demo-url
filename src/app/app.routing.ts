import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { InfoComponent } from './Components/info/info.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
const appRoutes = [    
    //{ path: '', component: IndexComponent,  pathMatch: 'full'},
    { path: '', component: HomeComponent,  pathMatch: 'full'},
    { path: 'info', component: InfoComponent,  pathMatch: 'full'},
    { path: 'contacto', component: ContactoComponent,  pathMatch: 'full'},    
];

//export const routing = RouterModule.forRoot(appRoutes, { useHash: true , scrollPositionRestoration: 'enabled'});
export const routing = RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled'});