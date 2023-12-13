import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { VerformularioComponent } from './verformulario/verformulario.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component: FormularioComponent
  },
  {
    path: 'obtener-usuario',
    component: VerformularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
