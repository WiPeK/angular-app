import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ])]
    })
  }

  public login(): void {
    this.authService.login(this.form.value);
  }

}
