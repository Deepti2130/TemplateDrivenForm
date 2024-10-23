import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TemplateDrivenForm';
  userNameMaxFlag :boolean =false;
  @ViewChild('signUp') signUp! : NgForm;

 contactMode = [
  {
   mode : "phone" , id:1},
   {
    mode : "Email" , id:2}
]

userObj = {

"UserDetails": {"userName": 'DeeptiJadhav', "email": 'deeptijadhav2130@gmail.com'},

"Secret Questions": "Favourite Place",
"answer": "Munnar",
"isSubscribed": true,
"moc": "phone"
}

  ngOnInit(): void {
    // setTimeout(()=>{
    //  console.log(this.signUp.controls['userName'])
    //  this.signUp.controls['userName'].valueChanges
    //  //valuechanges is observable hence it is need to subscribe
    //   .subscribe(data=>{
    //     // console.log(data)
    //     if(data.length >= 12){
    //         this.userNameMaxFlag = true
    //        }else{
    //         this.userNameMaxFlag = false           }
    //   })
    // },500)
   }

  onSignin(){
  // console.log(this.signUp)
  console.log(this.signUp.value)
  }


  onEdit(){
   this.signUp.form.patchValue(this.userObj)
  }

  //we dont need to bind event and functionality we use settimeout and get the controls
  onusernameKeyup(eve:any){
    // console.log(this)
   let vallength =(eve.target as HTMLInputElement).value.length
   if(vallength >= 12){
    this.userNameMaxFlag = true
   }
  }


}
