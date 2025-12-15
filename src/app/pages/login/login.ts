import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {
  email = '';
  password = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async ingresar() {
    this.loading = true;
    try {
      await this.auth.login(this.email, this.password);
      this.router.navigate(['/events']);
    } catch (e:any) {
      alert(e.message || 'Error al iniciar sesión');
    } finally {
      this.loading = false;
    }
  }
}
