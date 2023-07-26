import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA)public data : any,
    private dialogRef: MatDialogRef<EditUserComponent>) { }

  ngOnInit() {
    console.log("data got : ", this.data);
    this.userForm = this.formBuilder.group({
      fname: [this.data["first Name"] ? this.data["first Name"] : '', Validators.required],
      lname: [this.data["last Name"] ? this.data["last Name"] : '', Validators.required],
      email: [this.data["email"] ? this.data["email"] : '', [Validators.required, Validators.email]],
      phoneNo: [this.data["phoneNo"] ? this.data["phoneNo"] : '9191919191', Validators.required],
      group: [this.data["group"] ? this.data["group"] : '', Validators.required],
      date: [this.data["membership Validity"] ? this.data["membership Validity"] : ''],
      status: [this.data["status"] ? this.data["status"] : ''],

    });
  }


  onFormSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);


      this.dialogRef.close();
    }
  }

}
