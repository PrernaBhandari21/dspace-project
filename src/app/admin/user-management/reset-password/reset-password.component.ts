import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA)public data : any,
    private dialogRef: MatDialogRef<ResetPasswordComponent>) { }

  ngOnInit() {
    console.log("data got : ", this.data);
    this.userForm = this.formBuilder.group({
      password: [this.data["password"] ? this.data["password"] : '', [Validators.required, Validators.email]],
      vpassword: [this.data["password"] ? this.data["vpassword"] : '', Validators.required],


    });
  }


  onFormSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);


      this.dialogRef.close();
    }
  }

}
