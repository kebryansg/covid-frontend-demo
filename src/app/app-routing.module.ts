import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'resumen-infectado',
        pathMatch: 'full'
      },
      {
        path: 'resumen-infectado',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule),
        data: {title: 'Resumen - Infectado'}
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
