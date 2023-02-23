import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from 'src/app/_services/user.services';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  submitted: boolean = false;
  id: string = '';
  userForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private _userServices: UserServices,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userForm = this.formBuilder.group({
      name: [
        { value: '', disabled: this.id ? true : false },
        Validators.required,
      ],
      contact: ['', Validators.required],
      email: [
        { value: '', disabled: this.id ? true : false },
        Validators.required,
      ],
      dob: [
        { value: '', disabled: this.id ? true : false },
        Validators.required,
      ],
    });
    if (this.id) {
      // edit mode
      this._userServices.getUser(this.id).subscribe((user:any) => {
        this.userForm.patchValue(user);
      });
    }
  }

  get uf() {
    return this.userForm.controls;
  }

  addUser(): void {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    const user = { ...this.userForm.value };
    if(this.id){
      user.email=this.id;
      user.isUpdate=true;
    }
    this._userServices.addUser(user).subscribe((res: any) => {
      if (res.success) {
        this.router.navigateByUrl('/user')
        alert(res.message);
        this.submitted = false;
      } else {
        alert(res.message);
        this.submitted = false;
      }
    });
  }
}
