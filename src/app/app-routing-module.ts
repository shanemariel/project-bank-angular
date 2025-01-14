import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/create-account', pathMatch: 'full' },
  { path: 'create-account', component: CreateAccountComponent },
  {path: 'accounts', component: AccountListComponent},
  {path: 'get-account', component: GetAccountComponent},
  {path: 'accounts/edit/:id', component: EditAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
