import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WhishlistComponent } from './whishlist/whishlist.component';

export const routes: Routes = [
       { path: '', component: LoginComponent}, // this is the default route
       { path: 'login', component: LoginComponent },
       { path: 'register', component: SignupComponent, pathMatch: 'full'},
       { path: 'whishlist', component: WhishlistComponent }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes)]
})
export class AppRoutingModule {
 }
