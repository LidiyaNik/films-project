import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: "", redirectTo: "omdb", pathMatch: "full"},
      { path: "omdb", loadChildren: () => import("./omdbsearch/omdbsearch.module").then(m => m.OmdbsearchModule) },
      { path: "about", component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
