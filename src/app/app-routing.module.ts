import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

const routes: Routes = [
  { path: 'auth', component: AuthCallbackComponent }, // Handle OAuth redirect

  { path: '**', redirectTo: '/' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

//https://your-ngrok-id.ngrok-free.app/auth/callback