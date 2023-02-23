import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { UserServices } from 'src/app/_services/user.services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id:string="";
  user:User={};
  constructor(private route:ActivatedRoute,private _userServices:UserServices){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this._userServices.getUser(this.id).subscribe((user:any) => {
        this.user=user;
        console.log(this.user)
      });
    }
  }
}
