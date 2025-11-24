import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class Register {
  email = '';
  password = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async crearCuenta() {
    this.loading = true;
    try {
      await this.auth.register(this.email, this.password);
      alert('Cuenta creada. Inicia sesión.');
      this.router.navigate(['/login']);
    } catch (e:any) {
      alert(e.message || 'Error al crear cuenta');
    } finally {
      this.loading = false;
    }
  }
}
