import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneDetailsComponent } from './phonedetails/phonedetails.component';
import { PhoneListComponent } from './phonelist/phonelist.component';


const routes: Routes = [
  { path: '' , component: PhoneListComponent, pathMatch: 'full'},
  { path: 'phonedetails/:id', component: PhoneDetailsComponent}
  //{path: 'details', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }