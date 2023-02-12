import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'crisis-list', component: CrisisListComponent},
    {path: '', redirectTo: '/crisis-list', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: '**', component: PageNotFoundComponent}
  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
