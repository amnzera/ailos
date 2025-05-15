import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  standalone: false
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();

    if (!this.user) {
      this.router.navigate(['/']);
    }
  }

  iniciarNovaAdmissao(): void {
    this.userService.setCurrentUser(null);
    this.router.navigate(['/']);
  }
}
