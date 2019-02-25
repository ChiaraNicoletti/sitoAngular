import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtenteComponent } from './utente/utente.component'

const routes: Routes = [
  {
    path: 'utente',
  component: UtenteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
