import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);

  getUserByCpf(cpf: string): Observable<User | null> {
    if (cpf.replace(/\D/g, '') === '42386370895') {
      const user: User = {
        nome: 'Mariane de Sousa Oliveira',
        cpf: '423.863.708-95',
        situacaoCadastral: 'Regular',
        contaAplicacao: {
          cooperativa: 'Viacredi',
          numeroConta: '557932-4'
        },
        contaCorrente: {
          cooperativa: 'Viacredi',
          numeroConta: '778651-8'
        }
      };
      this.setCurrentUser(user);
      return of(user);
    }
    return of(null);
  }

  setCurrentUser(user: User | null): void {
    this.userSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }
}
