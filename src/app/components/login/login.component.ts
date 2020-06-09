import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../interfaces/login';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthToken } from '../../interfaces/auth-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public isVisible: boolean = false;
  private formValues: Login;
  private authorizationSubscribe: Subscription;

  constructor(
    private modalService: ModalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  ngOnDestroy(): void {
    this.authorizationSubscribe.unsubscribe();
  }

  login(formValues: Login, id: string): void {
    const { email, password } = { ...formValues };
    this.authorizationSubscribe = <Subscription>(
      this.authService.login(email, password).subscribe(
        (resp: AuthToken) => {
          localStorage.setItem('auth_token', resp.access_token);
          this.router.navigate(['profile']);
          this.isVisible = false;
          setTimeout(() => this.closeModal(id), 300);
        },
        () => {
          this.isVisible = true;
        }
      )
    );
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }

  submit(id: string): void {
    this.formValues = this.form.value;
    this.login(this.formValues, id);
  }
}
