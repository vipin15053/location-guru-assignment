import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  declarations: [LayoutComponent, UserListComponent, AddEditComponent],
  imports: [UserRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [],
})
export class UserModule {}
