import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password-init',
  templateUrl: './reset-password-init.component.html',
  styleUrls: ['./reset-password-init.component.scss']
})
export class ResetPasswordInitComponent implements OnInit {
  resetInitForm: FormGroup;
  error: boolean;
  saving: boolean;
  email: FormControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.resetInitForm = this.fb.group({
      email: this.email = new FormControl('', [Validators.required, Validators.email])
    });
  }
  reset(formValue: string) {
    if (this.resetInitForm.invalid) {
      return;
    }
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
    }, 5000);
  }
}
