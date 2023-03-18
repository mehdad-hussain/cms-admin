import { Component, Input, OnInit } from '@angular/core';
// prettier-ignore
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Observable } from 'rxjs';

import { IPage, ModalService } from '@core';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';

// prettier-ignore
import  {IText, 
  ISelect,
  ICheckbox,
  IRadio,
  IDate,
  IFile,
  INumber,
}  from './field.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public createForm!: FormGroup;
  public thirdForm!: FormGroup;
  public newForm!: FormGroup;
  selectedCar!: 1;

  configModal = 'configModal';
  typeSettingModal = 'typeSettingModal';
  selectedType = '';

  title = new FormControl('', [Validators.required]);

  fieldTypes = [
    { id: 1, name: 'Text', title: '', placeholder: '', validators: [] },
    { id: 2, name: 'Textarea', title: '', placeholder: '', validators: [] },
    { id: 3, name: 'Number', title: '', placeholder: '', validators: [] },
    { id: 4, name: 'Email', title: '', placeholder: '', validators: [] },
    { id: 5, name: 'Password', title: '', placeholder: '', validators: [] },

    { id: 6, name: 'Select', title: '', placeholder: '', validators: [] },
    { id: 9, name: 'Multi Select', title: '', placeholder: '', validators: [] },
    { id: 7, name: 'Radio', title: '', placeholder: '', validators: [] },
    { id: 8, name: 'Checkbox', title: '', placeholder: '', validators: [] },

    { id: 10, name: 'URL', title: '', placeholder: '', validators: [] },
    { id: 11, name: 'JSON', title: '', placeholder: '', validators: [] },

    { id: 12, name: 'Image', title: '', placeholder: '', validators: [] },
    { id: 13, name: 'Video', title: '', placeholder: '', validators: [] },
    { id: 14, name: 'PDF', title: '', placeholder: '', validators: [] },
    { id: 15, name: 'File', title: '', placeholder: '', validators: [] },

    { id: 16, name: 'Date', title: '', placeholder: '', validators: [] },
    { id: 17, name: 'Time', title: '', placeholder: '', validators: [] },
    { id: 18, name: 'DateTime', title: '', placeholder: '', validators: [] },
  ];

  cars = [
    { id: 1, value: 'Volvo' },
    { id: 2, value: 'Saab' },
    { id: 3, value: 'Opel' },
    { id: 4, value: 'Audi' },
  ];

  openTab = 1;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  formGroups = new Map();

  fromFields: any = [
    {
      type: 'text',
      control: 'title',
      label: 'Title',
      placeholder: 'Title',
      value: null,
      order: 1,
      validators: [
        {
          name: 'required',
        },
        {
          name: 'minLength',
          value: 3,
        },
      ],
    },
    {
      type: 'text',
      control: 'placeholder',
      label: 'Placeholder',
      placeholder: 'Placeholder',
      value: null,
      order: 2,
      validators: [
        {
          name: 'required',
        },
      ],
    },
    {
      type: 'checkbox',
      control: 'required',
      label: 'Required',
      altLabel: 'Not Required',
      value: false,
      order: 3,
    },
    {
      type: 'number',
      control: 'maxLength',
      label: 'Max Length',
      placeholder: 'Max Length',
      value: 0,
      order: 4,
    },
    {
      type: 'number',
      control: 'minLength',
      label: 'Min Length',
      placeholder: 'Min Length',
      value: 0,
      order: 5,
    },
    {
      type: 'number',
      control: 'maxValue',
      label: 'Max Value',
      placeholder: 'Max Value',
      value: 0,
      order: 6,
    },
    {
      type: 'number',
      control: 'minValue',
      label: 'Min Value',
      placeholder: 'Min Value',
      value: 0,
      order: 7,
    },
    {
      type: 'text',
      control: 'pattern',
      label: 'Pattern',
      placeholder: 'Pattern',
      value: null,
      order: 8,
    },
    {
      type: 'select',
      control: 'cars',
      label: 'Cars',
      placeholder: 'Cars',
      value: null,
      order: 6,
      options: this.cars,
      bindLabel: 'value',
      bindValue: 'id',
      searchable: true,
      clearable: true,
      closeOnSelect: true,
      validators: [
        {
          name: 'required',
        },
      ],
    },
  ];

  finalFromFields: any = [];

  constructor(private fb: FormBuilder, public modal: ModalService) {}

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

      // console.log(group[field.control]);

      this.formGroups.set(field.control, group[field.control]);
    });

    // console.log('toFormGroup', group);

    // console.log(this.formGroups);

    return new FormGroup(group);
  }

  ngOnInit() {
    this.thirdForm = this.toFormGroup(this.fromFields);

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

    this.createForm = this.fb.group({
      title: [null, Validators.required],
      placeholder: [null],
      type: [null],
      required: [false],
      maxLength: [null],
      minLength: [null],
      maxValue: [null],
      minValue: [null],
      pattern: [null],
      patternMessage: [null],
      email: [false],
    });

    this.modal.register(this.configModal);
  }

  ngOnDestroy(): void {
    this.modal.unregister(this.configModal);
    this.modal.unregister(this.typeSettingModal);
  }

  openModal() {
    this.modal.toggleModal(this.configModal);
  }

  selectCollectionType(selectedType: string) {
    console.log(selectedType);
    this.selectedType = selectedType;
    this.modal.toggleModal(this.configModal);
    this.modal.register(this.typeSettingModal);
    this.modal.toggleModal(this.typeSettingModal);
  }

  onSubmit() {
    console.log(
      'cars error:',
      this.newForm.hasError('required', ['cars']),
      this.newForm.controls['cars'].errors
    );

    if (this.newForm.invalid) {
      console.log('invalid');
      return;
    }
    console.log(this.newForm.value);
  }

  createField() {
    Object.keys(this.thirdForm.value).forEach((key) => {
      if (
        typeof this.thirdForm.value[key] === 'string' ||
        this.thirdForm.value[key] !== null
      ) {
        this.thirdForm.value[key] = Number.isNaN(+this.thirdForm.value[key])
          ? this.thirdForm.value[key]
          : +this.thirdForm.value[key];
      }
    });

    console.log('third form', this.thirdForm.value);

    let validators: any = [];

    if (this.thirdForm.value.required) {
      validators.push({
        name: 'required',
      });
    }

    if (this.thirdForm.value.maxLength) {
      validators.push({
        name: 'maxLength',
        value: this.thirdForm.value.maxLength,
      });
    }
    if (this.thirdForm.value.maxValue) {
      validators.push({
        name: 'maxValue',
        value: this.thirdForm.value.maxValue,
      });
    }

    if (this.thirdForm.value.minLength) {
      validators.push({
        name: 'minLength',
        value: this.thirdForm.value.minLength,
      });
    }

    if (this.thirdForm.value.minValue) {
      validators.push({
        name: 'minValue',
        value: this.thirdForm.value.minValue,
      });
    }

    if (this.thirdForm.value.pattern) {
      validators.push({
        name: 'pattern',
        value: this.thirdForm.value.pattern,
      });
    }

    if (this.selectedType === 'email') {
      validators.push({
        name: 'email',
      });
    }

    const formField = {
      type: 'text',
      control: this.thirdForm.value.title
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(''),
      label: this.thirdForm.value.title,
      placeholder: this.thirdForm.value.placeholder,
      value: '',
      validators: validators,
    };

    this.inputFormFields = [...this.inputFormFields, formField];

    console.log(this.inputFormFields);

    // console.log(this.toFormGroup([formField]));

    // if (this.createForm.invalid) {
    //   console.log('invalid');
    //   console.log(this.createForm.hasError('required', ['multiple']));
    // }

    // console.log(this.createForm.value);
  }

  inputFormFields: any = [];
}
