import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  gender: FormControl;
  category: FormControl;
  userName: FormControl;
  email: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email: this.email = new FormControl('', [Validators.required, Validators.email]),
      firstName: this.firstName = new FormControl('', [Validators.required]),
      lastName: this.lastName = new FormControl('', [Validators.required]),
      gender: this.gender = new FormControl('', [Validators.required]),
      category: this.category = new FormControl('', [Validators.required]),
      userName: this.userName = new FormControl('', [Validators.required])
    });
  }
  submit(formValues: any) {
    console.log(formValues);
  }

}
