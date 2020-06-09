import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  logOut(): void {
    setTimeout(() => this.authService.logout(), 750);
    this.router.navigate(['/']);
  }
  ngOnInit(): void {}
}
