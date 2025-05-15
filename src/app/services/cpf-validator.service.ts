import {Injectable} from '@angular/core';
import {CpfValidationResult} from '../models/cpf-validation-result.model';

@Injectable({
  providedIn: 'root'
})
export class CpfValidatorService {

  validateCpf(cpf: string): CpfValidationResult {
    const cpfClean = cpf.replace(/\D/g, '');

    if (cpfClean.length !== 11) {
      return {
        isValid: false,
        message: 'CPF deve conter 11 dígitos.'
      };
    }

    if (/^(\d)\1{10}$/.test(cpfClean)) {
      return {
        isValid: false,
        message: 'CPF inválido.'
      };
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpfClean.charAt(i)) * (10 - i);
    }

    let resto = soma % 11;
    let dv1 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpfClean.charAt(9)) !== dv1) {
      return {
        isValid: false,
        message: 'CPF inválido.'
      };
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpfClean.charAt(i)) * (11 - i);
    }

    resto = soma % 11;
    let dv2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpfClean.charAt(10)) !== dv2) {
      return {
        isValid: false,
        message: 'CPF inválido.'
      };
    }

    return { isValid: true };
  }

  formatCpf(cpf: string): string {
    const cpfClean = cpf.replace(/\D/g, '');
    if (cpfClean.length !== 11) {
      return cpfClean;
    }
    return cpfClean.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
