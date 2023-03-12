import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    // this.form = this.toFormGroup(this.newField);
  }

  toFormGroup(fields: any[]) {
    const group: any = {};

    let validators: any = [];

    fields.forEach((field) => {
      if (field.validators) {
        field.validators.forEach((v: any) => {
          if (v.name === 'required') {
            validators.push(Validators.required);
          } else if (v.name === 'minLength') {
            validators.push(Validators.minLength(v.value));
          } else {
            validators.push([]);
          }
        });
      }

      group[field.control] = new FormControl(field.value || '', validators);
    });

    return new FormGroup(group);
  }

  newField = [
    {
      control: 'name',
      validators: [
        {
          name: 'required',
          message: 'Name is required',
          value: true,
        },
        {
          name: 'minLength',
          message: 'Name must be at least 3 characters long',
          value: 3,
        },
      ],
    },
  ];

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
