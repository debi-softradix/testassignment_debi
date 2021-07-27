import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  

  hobbies = [{ id: 1, name: "Singing" }, { id: 2, name: "Reading" }, { id: 3, name: "Dancing" }, { id: 4, name: "Photography" }];
  id!: number;
  checkedHobbies: any = []
  array = [];
  registrationData: any;
  data: any;
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService, private router: Router) {

  }
  ngOnInIt(): void {
   
  }

  registration = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
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
      console.log('Password and confirm password did not match.');
    } else {
      this.isPasswordMatched = false;
    }
  }
  onCheck(id: number) {

    if (!this.checkedHobbies.includes(id)) {
      this.checkedHobbies.push(id);
    }
    else {
      var index = this.checkedHobbies.indexOf(id);
      if (index > -1) {
        this.checkedHobbies.splice(index, 1);
      }
    }
  }
  getSubmitData() {
    this.submitted = true;
    if (this.registration.valid) {
      // // alert('Form submitted succesfully!!!\n check the value in browser console.')
      // if (window.confirm('Form submitted succesfully!!!')) 
      // {
      // window.location.href='https://localhost:3000/users/:id';
      // };

      console.log(this.registration.value);
      console.log("hobbies are", this.checkedHobbies);
      this.registrationData = this.registration.value;
      this.registrationData["hobbies"] = this.checkedHobbies;
      delete this.registrationData["confirmpassword"]
      console.log("registration data is", this.registrationData)
      console.log(this.onCheck(this.id));
      console.log(this.checkedHobbies[this.id])
    }

  }
  onSubmit() {
    console.log(this.registration.value);

    // this.router.navigate(['/Result'])

    this._registrationService.register(this.registrationData)
      .subscribe(
        Response => {
          console.log('Success!', Response)
          this.router.navigate(['/Result'])
        },
        error => {
          console.error('error', error)
        }
      );

    // console.log("name is",this.registrationData["FirstName"]);  

    // this.registrationData.getData().subscribe(this.data);{
    //   console.log("get",this.data);
    // };
  }
}



