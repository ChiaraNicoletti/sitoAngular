import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtenteComponent } from './utente/utente.component';
import { NavbarComponent } from './navbar/navbar.component'

const routes: Routes = [
  {
    path: 'utente',
  component: UtenteComponent
},
{
  path: 'navbar',
component: NavbarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
