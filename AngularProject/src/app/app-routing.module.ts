import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('./auth/auth.module').then(m =>
      m.AuthModule)
  },
  {
    path: "footer",
    loadChildren: () => import('./footer/footer.module').then(m =>
      m.FooterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
