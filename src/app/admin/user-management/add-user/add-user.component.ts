import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef:MatDialogRef<AddUserComponent>) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      password: ['', Validators.required],
      vpassword: ['', Validators.required],
      group: ['', Validators.required],
      date: ['']
    });
  }


  onFormSubmit() {
    if (this.userForm.valid) {
      const password = this.userForm.get('password')?.value;
      const vpassword = this.userForm.get('vpassword')?.value;
  
      if (password === vpassword) {
        // Remove the 'vpassword' field before submitting to the database
        const { vpassword, ...userData } = this.userForm.value;
        
        console.log(userData); // This contains the data to be sent to the database
  
    
  
        this.dialogRef.close();
      } else {
        alert('Passwords do not match. Please verify your password.');
      }
    }
  }
  

}
