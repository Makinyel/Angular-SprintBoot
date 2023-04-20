import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonaComponent } from './pages/crud/containers/list/lista-persona.component';
import { RegistrarPersonaComponent } from './pages/crud/containers/forms/registrar-persona/registrar-persona.component';
import { EditarPersonaComponent } from './pages/crud/containers/forms/editar-persona/editar-persona.component';
import { LoginComponent } from './pages/crud/containers/login/login/login.component';

const routes: Routes = [
  {path:'personas',component:ListaPersonaComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'registar-persona',component:RegistrarPersonaComponent},
  {path:'editar-persona',component:EditarPersonaComponent},
  {path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
