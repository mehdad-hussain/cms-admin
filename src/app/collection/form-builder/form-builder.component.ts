import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  @Input() fromFields: any = [];

  public dynamicForm!: FormGroup;
  constructor() {}

  formGroups = new Map();

  finalFromFields: any = [];

  toFormGroup(fields: any[]) {
    const group: any = {};

    let validators: any = [];

    fields.forEach((field) => {
      if (field.validators && field.validators.length > 0) {
        validators = [];

        field.validators.forEach((v: any) => {
          if (v.name === 'required') {
            validators.push(Validators.required);
          } else if (v.name === 'minLength') {
            validators.push(Validators.minLength(v.value));
          } else if (v.name === 'maxLength') {
            validators.push(Validators.maxLength(v.value));
          } else if (v.name === 'minValue') {
            validators.push(Validators.min(v.value));
          } else if (v.name === 'maxValue') {
            validators.push(Validators.max(v.value));
          } else if (v.name === 'pattern') {
            validators.push(Validators.pattern(v.value));
          } else if (v.name === 'email') {
            validators.push(Validators.email);
          } else {
            validators.push([]);
          }
        });
      } else {
        validators = [];
      }

      group[field.control] = new FormControl(field.value ?? null, validators);

      this.formGroups.set(field.control, group[field.control]);
    });

    return new FormGroup(group);
  }

  ngOnInit(): void {
    console.log(this.fromFields);
    // this.fromFields = [...this.fromFields];

    this.dynamicForm = this.toFormGroup(this.fromFields);

    this.formGroups.forEach((value, key) => {
      // console.log(key, value);
      this.fromFields = this.fromFields.map((field: any) => {
        if (field.type !== 'select') {
          if (field.control === key) {
            field.control = value;
          }
        }
        return field;
      });
    });
  }
}
