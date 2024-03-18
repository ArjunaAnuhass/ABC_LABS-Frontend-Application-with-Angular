import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { UserStorageService } from '../service/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abcNewFrontend';

  constructor (
    public authService: AuthService,
    private userStorageService: UserStorageService,
    private router: Router,
  ){}
}
