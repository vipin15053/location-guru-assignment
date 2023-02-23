import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/dashboard/home',
    pathMatch:'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'user',
        loadChildren:()=>import ('./modules/users/user.module').then(m=>m.UserModule)
      },
      {
        path:"about",
        loadChildren:()=>import('./modules/about/about.module').then(m=>m.AboutModule)
      }
    ]
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/dashboard/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
