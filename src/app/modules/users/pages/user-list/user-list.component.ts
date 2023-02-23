import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserServices } from 'src/app/_services/user.services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
 userList:User[]=[];
 isDeleting:boolean=false;
 constructor(private _userServices:UserServices){}
 ngOnInit(): void {
   this._userServices.user.subscribe(users=>{
    this.userList=users;
   })
 }
 deleteUser(id:any):void{
  this.isDeleting=true;
  this._userServices.deleletUser(id).subscribe((res:any)=>{
   if(res.success){
    alert(res.message);
    this.isDeleting=false;
   }
   })
 }
}
