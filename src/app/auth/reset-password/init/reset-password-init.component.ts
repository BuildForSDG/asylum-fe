import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password-init.component.html',
  styleUrls: ['./reset-password-init.component.scss']
})
export class ResetPasswordInitComponent implements OnInit {
  resetInitForm: FormGroup;
  error: boolean;
  saving: boolean;
  email: FormControl;

  constructor() { }

  ngOnInit(): void {
  }
  reset(formValue: string) {}

}
