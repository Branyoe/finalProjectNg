import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { CitasComponent } from './components/citas/citas.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';

const routes: Routes = [
  {
    path: "",
    component: PortadaComponent,
    pathMatch: "full"
  },
  {
    path: "citas",
    component: CitasComponent
  },
  {
    path: "conclusion",
    component: ConclusionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
