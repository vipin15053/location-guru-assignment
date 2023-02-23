import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEditComponent } from "./pages/add-edit/add-edit.component";
import { LayoutComponent } from "./pages/layout/layout.component";
import { UserDetailsComponent } from "./pages/user-details/user-details.component";
import { UserListComponent } from "./pages/user-list/user-list.component";

const routes:Routes=[{
    path:'',
    component:LayoutComponent,
    children:[
        {
            path:'',
            component:UserListComponent
        },
        {
            path:'add',
            component:AddEditComponent
        },
        {
            path:'edit/:id',
            component:AddEditComponent
        },
        {
            path:'details/:id',
            component:UserDetailsComponent
        }
    ]
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }