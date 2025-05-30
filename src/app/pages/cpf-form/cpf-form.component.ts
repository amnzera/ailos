import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CpfValidatorService} from '../../services/cpf-validator.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-cpf-form',
  templateUrl: './cpf-form.component.html',
  styleUrls: ['./cpf-form.component.css'],
  standalone: false,
})
export class CpfFormComponent implements OnInit {
  cpfForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cpfValidator: CpfValidatorService,
    private userService: UserService,
  ) {
    this.cpfForm = this.formBuilder.group({
      cpf: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.userService.setCurrentUser(null);
  }

  onSubmit(): void {
    if (this.cpfForm.invalid) {
      return;
    }

    this.errorMessage = null;

    const cpf = this.cpfForm.get('cpf')?.value;
    const validationResult = this.cpfValidator.validateCpf(cpf);

    if (!validationResult.isValid) {
      this.errorMessage = validationResult.message || 'CPF inválido.';
      return;
    }

    this.userService.getUserByCpf(cpf).subscribe({
      next: (user) => {
        if (user) {
          this.router.navigate(['/detalhes-usuario']);
        } else {
          this.errorMessage = 'CPF não encontrado na base de dados.';
        }
      },
      error: (error) => {
        this.errorMessage =
          'Erro ao consultar CPF. Tente novamente mais tarde.';
        console.error('Erro na consulta de CPF:', error);
      },
    });
  }

  formatCpfInput(): void {
    const cpfControl = this.cpfForm.get('cpf');
    if (cpfControl && cpfControl.value) {
      cpfControl.setValue(this.cpfValidator.formatCpf(cpfControl.value), {
        emitEvent: false,
      });
    }
  }
}
