import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './data/helper/auth.guard';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { EditComponent } from './modules/admin/page/edit/edit.component';
import { VisitSubpageComponent } from './modules/doctors/page/visit-subpage/visit-subpage.component';
import { TreatmentComponent } from './modules/work/page/treatment/treatment.component';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'doctors',
        loadChildren: () => import('./modules/doctors/doctors.module').then(m => m.DoctorsModule)
      },
      {
        path: 'visit/:id',
        loadChildren: () => import('./modules/doctors/doctors.module').then(m => m.DoctorsModule),
        component: VisitSubpageComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'work/:id',
        loadChildren: () => import('./modules/work/work.module').then(m => m.WorkModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'treatment/:id',
        loadChildren: () => import('./modules/work/work.module').then(m => m.WorkModule),
        component:TreatmentComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        component:EditComponent,
        canActivate:[AuthGuard]
      },
    ]
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
