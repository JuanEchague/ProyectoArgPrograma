import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitioComponent } from './shared/sitio/sitio.component';
import { RegistrarItemComponent } from './shared/registrar-item/registrar-item.component';
const routes: Routes = [
  {path : 'registrar-comentario', component: RegistrarItemComponent},
  {    path : 'sitio', component: SitioComponent  },
  {   path: '', redirectTo:'sitio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
