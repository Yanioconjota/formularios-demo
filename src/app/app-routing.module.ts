import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactivoComponent } from './components/reactivo/reactivo.component';
import { TemplateComponent } from './components/template/template.component';


const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'reactivo', component: ReactivoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'template' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
