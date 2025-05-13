// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() { }

  // Simula requisição ao back-end para buscar dados do usuário
  getUserByCpf(cpf: string): Observable<User | null> {
    // Para fins de teste, retorna um usuário mockado para o CPF 111.222.333-44
    if (cpf.replace(/\D/g, '') === '11122233344') {
      const user: User = {
        nome: 'Mariane de Sousa Oliveira',
        cpf: '111.222.333-44',
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

    // Para qualquer outro CPF, retorna null (CPF não encontrado)
    return of(null);
  }

  setCurrentUser(user: User | null): void {
    this.userSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }
}
