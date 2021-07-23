import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hobbies = [{ id: 1, name: "singing" }, { id: 2, name: "reading" }, { id: 3, name: "dancing" }, { id: 4, name: "photography" }];
  id!: number;
  checkedHobbies: any = []
  array= [];

  constructor(private fb: FormBuilder) { }

  registration = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    rolls: new FormControl(' ', Validators.required),
    hobbies: new FormControl('', Validators.required),
  }
  );
  submitted = false;
  isPasswordMatched: boolean = false;
  passwordErrorMsg = "";
  ngOnInit(): void { }

  get registrationFormControl() {
    return this.registration.controls;
  };
  
  onBlurPassword() {
    this.passwordErrorMsg = "Password and confirm password did not match";
    if (this.registration.value.password !== this.registration.value.confirmpassword) {
      this.isPasswordMatched = true;
      // console.log('Password and confirm password did not match.');
    } else {
      this.isPasswordMatched = false;
    }
  }
  onCheck(id: number) {

    this.checkedHobbies.push(id);
    
    if (!this.checkedHobbies.includes) {
      this.checkedHobbies.push(id);
    }
    else {
      var index = this.checkedHobbies.indexOf(id);
      console.log(this.checkedHobbies);
      // if (index > -1) {
      //   this.checkedHobbies.splice(index,1);
      // }
    }
    }
    getSubmitData() {
      this.submitted = true;
      if (this.registration.valid) {
        alert('Form submitted succesfully!!!\n check the value in browser console.')
        console.log(this.registration.value);
        // console.log(this.onCheck(this.id));
        // console.log(this.checkedHobbies[this.id])
        

        
    
   }
  }
}


