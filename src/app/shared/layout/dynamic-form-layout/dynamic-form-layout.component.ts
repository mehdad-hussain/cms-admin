import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './field-base';

@Component({
  selector: 'app-dynamic-form-layout',
  templateUrl: './dynamic-form-layout.component.html',
  styleUrls: ['./dynamic-form-layout.component.scss'],
})
export class DynamicFormLayoutComponent implements OnInit {
  @Input() field!: FieldBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  constructor() {}

  ngOnInit(): void {}
}
