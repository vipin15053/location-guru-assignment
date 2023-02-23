import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../_models/user";

@Injectable({providedIn:'root'})
export class UserServices{
    private userSubject: BehaviorSubject<User[] | []>;
    public user: Observable<User[] | []>;
    constructor(){
        this.userSubject=new BehaviorSubject<User[]>([{
            name:'Vipin yadav',
            contact:"7809876789",
            email:'vipin.yad@gmail.com',
            dob:'12-02-1997'
        }]);
        this.user=this.userSubject.asObservable();
    }
    addUser(user:any):any{
       let allUser= this.userSubject.value;
       if(allUser.length>0){
        const isUser=allUser.find(usr=>usr.email==user.email);
        if(user.isUpdate && isUser){
            isUser.contact=user.contact;
            const exitsUser=allUser.filter(usr=>usr.email!==user.email);
            this.userSubject.next([...exitsUser, isUser]);
            return new Observable(ober=>ober.next({success:true,message:"User Updated Successfully."}))
        }
        if(isUser){
            return new Observable(ober=>ober.next({success:false,message:"User is already exits."}));
        }
        const exitsUser=allUser.filter(usr=>usr.email!==user.email);
        this.userSubject.next([...exitsUser, user]);
        return new Observable(ober=>ober.next({success:true,message:"User Added Successfully."}));
       }
    }
    getUser(email:any):any{
        let allUser= this.userSubject.value;
        if(allUser.length>0){
            const user=allUser.find(usr=>usr.email==email);
            return new Observable(ober=>ober.next(user)) 
        }
    }
    deleletUser(email:any):any{
        let allUser= this.userSubject.value;
        if(allUser.length>0){
            const exitsUser=allUser.filter(usr=>usr.email!==email);
            this.userSubject.next([...exitsUser]);
            return new Observable(ober=>ober.next({success:true,message:"User Deleted Successfully."})) 
        }
    }
}