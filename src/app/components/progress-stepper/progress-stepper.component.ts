import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-stepper',
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.css'],
  standalone: false
})
export class ProgressStepperComponent implements OnInit {
  @Input() currentStep: number = 1;
  steps = [
    { name: 'Início', active: true },
    { name: 'Documentos', active: false },
    { name: 'Dados cadastrais', active: false },
    { name: 'Aprovação', active: false }
  ];

  constructor() { }

  ngOnInit(): void {
    this.updateSteps();
  }

  ngOnChanges(): void {
    this.updateSteps();
  }

  private updateSteps(): void {
    for (let i = 0; i < this.steps.length; i++) {
      this.steps[i].active = i < this.currentStep;
    }
  }
}
