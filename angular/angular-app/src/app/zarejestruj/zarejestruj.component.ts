import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

@Component({
  selector: 'app-zarejestruj',
  templateUrl: './zarejestruj.component.html',
  styleUrls: ['./zarejestruj.component.css']
})
export class ZarejestrujComponent implements OnInit {

  formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  prepareFormGroup() {
    this.formGroup = new FormGroup({
      Name: new FormControl('', [
        Validators.required,
      ]),
      Surname: new FormControl('', [
        Validators.required,
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]),
      RePassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    }, { validators: this.checkPasswords });
  }

  checkPasswords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('Password');
    const confirmPassword = control.get('RePassword');

    return password && confirmPassword && (password.value === confirmPassword.value) ? { notMatchingPasswords: true } : null;
  }

  onSubmit() {
    console.log(this.formGroup);
  }

}
