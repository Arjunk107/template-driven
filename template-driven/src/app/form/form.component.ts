import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  namePattern = "^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public userForm: any = {
    username: '',
    email: '',
    address: '',
    dob: '',
    phnumber: '',
    password: ''
  }
  onSubmit(form: any, formdata: any) {
    console.log(formdata)
    form.reset();
  }
}
