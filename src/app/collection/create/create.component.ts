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
  public settingForm!: FormGroup;
  public thirdForm!: FormGroup;
  public newForm!: FormGroup;
  selectedCar!: 1;

  configModal = 'configModal';
  typeSettingModal = 'typeSettingModal';
  selectedType = '';
  isUpdate: boolean = false;

  constructor(private fb: FormBuilder, public modal: ModalService) {}

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

  openTab = 1;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  collectionName = new FormControl('', [Validators.required]);
  collectionDescription = new FormControl('', [Validators.required]);

  formGroups = new Map();

  generalFormFields: any = [
    {
      type: 'text',
      control: 'title',
      label: 'Title',
      placeholder: 'Title',
      value: null,
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
      validators: [
        {
          name: 'required',
        },
      ],
    },
  ];

  validationFormFields: any = [
    {
      type: 'checkbox',
      control: 'required',
      label: 'Required',
      altLabel: 'Not Required',
      value: false,
    },
    {
      type: 'number',
      control: 'maxLength',
      label: 'Max Length',
      placeholder: 'Max Length',
      value: 0,
    },
    {
      type: 'number',
      control: 'minLength',
      label: 'Min Length',
      placeholder: 'Min Length',
      value: 0,
    },
    {
      type: 'number',
      control: 'maxValue',
      label: 'Max Value',
      placeholder: 'Max Value',
      value: 0,
    },
    {
      type: 'number',
      control: 'minValue',
      label: 'Min Value',
      placeholder: 'Min Value',
      value: 0,
    },
    {
      type: 'text',
      control: 'pattern',
      label: 'Pattern',
      placeholder: "Insert the validator's pattern",
      value: null,
    },
  ];

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
    this.settingForm = this.toFormGroup([
      ...this.generalFormFields,
      ...this.validationFormFields,
    ]);

    console.log(this.settingForm);

    this.formGroups.forEach((value, key) => {
      // console.log(key, value);
      this.generalFormFields = this.generalFormFields.map((field: any) => {
        if (field.type !== 'select') {
          if (field.control === key) {
            field.control = value;
          }
        }
        return field;
      });

      this.validationFormFields = this.validationFormFields.map(
        (field: any) => {
          if (field.type !== 'select') {
            if (field.control === key) {
              field.control = value;
            }
          }
          return field;
        }
      );
    });

    console.log(this.settingForm);

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
    this.settingForm.reset();
    this.openTab = 1;
    this.modal.toggleModal(this.configModal);
    this.modal.register(this.typeSettingModal);
    this.modal.toggleModal(this.typeSettingModal);
  }

  // section: function for creating new field
  createOrUpdateField(mode: string) {
    Object.keys(this.settingForm.value).forEach((key) => {
      if (
        typeof this.settingForm.value[key] !== 'boolean' &&
        typeof this.settingForm.value[key] === 'string' &&
        this.settingForm.value[key] !== null
      ) {
        this.settingForm.value[key] = Number.isNaN(+this.settingForm.value[key])
          ? this.settingForm.value[key]
          : +this.settingForm.value[key];
      }
    });

    if (this.settingForm.invalid) {
      console.log('invalid');
      console.log('create form', this.settingForm.value);
    }

    // let objForFieldCreation = { ...this.settingForm.value };

    let validators: any = [];

    if (this.settingForm.value.required) {
      validators.push({
        name: 'required',
      });
    }

    if (this.settingForm.value.maxLength) {
      validators.push({
        name: 'maxLength',
        value: this.settingForm.value.maxLength,
      });
    }

    if (this.settingForm.value.minLength) {
      validators.push({
        name: 'minLength',
        value: this.settingForm.value.minLength,
      });
    }

    if (this.settingForm.value.maxValue) {
      validators.push({
        name: 'maxValue',
        value: this.settingForm.value.maxValue,
      });
    }

    if (this.settingForm.value.minValue) {
      validators.push({
        name: 'minValue',
        value: this.settingForm.value.minValue,
      });
    }

    if (this.settingForm.value.pattern) {
      validators.push({
        name: 'pattern',
        value: this.settingForm.value.pattern,
      });
    }

    if (this.selectedType === 'Email') {
      validators.push({
        name: 'email',
      });
    }

    const formField = {
      type: 'text',
      control: this.settingForm.value.title
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(''),
      label: this.settingForm.value.title,
      placeholder: this.settingForm.value.placeholder,
      value: '',
      validators: validators,
    };

    if (mode === 'create') {
      this.rawData = [
        ...this.rawData,
        {
          CollectionName: this.collectionName.value,
          Fields: { ...formField },
        },
      ];
    } else {
      this.rawData = this.rawData.map((item) => {
        if (item.CollectionName === this.collectionName.value) {
          item.Fields = { ...formField };
        }
        return item;
      });
    }

    this.setPage({ offset: 0 });

    this.openTab = 1;
    this.settingForm.reset();

    this.modal.toggleModal(this.typeSettingModal);
  }

  // section: table functions

  data: any;
  rawData: any[] = [];
  page: IPage = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0,
  };

  setPage(pageInfo: any) {
    // console.log(pageInfo);
    this.page.pageNumber = pageInfo.offset;
    this.page.size = 2;
    this.page.totalElements = 5;
    this.data = this.rawData.slice(this.page.pageNumber * this.page.size);
    // console.log(this.data);
  }

  onEdit(row: any) {
    this.isUpdate = true;
    this.settingForm.patchValue({
      title: row.Fields.label,
      placeholder: row.Fields.placeholder,
      required: row.Fields.validators.some(
        (validator: any) => validator.name === 'required'
      ),
      maxLength: row.Fields.validators.find(
        (validator: any) => validator.name === 'maxLength'
      )
        ? row.Fields.validators.find(
            (validator: any) => validator.name === 'maxLength'
          ).value
        : 0,
      minLength: row.Fields.validators.find(
        (validator: any) => validator.name === 'minLength'
      )
        ? row.Fields.validators.find(
            (validator: any) => validator.name === 'minLength'
          ).value
        : 0,
      maxValue: row.Fields.validators.find(
        (validator: any) => validator.name === 'maxValue'
      )
        ? row.Fields.validators.find(
            (validator: any) => validator.name === 'maxValue'
          ).value
        : 0,

      minValue: row.Fields.validators.find(
        (validator: any) => validator.name === 'minValue'
      )
        ? row.Fields.validators.find(
            (validator: any) => validator.name === 'minValue'
          ).value
        : 0,
      pattern: row.Fields.validators.find(
        (validator: any) => validator.name === 'pattern'
      )
        ? row.Fields.validators.find(
            (validator: any) => validator.name === 'pattern'
          ).value
        : null,
    });

    this.modal.toggleModal(this.typeSettingModal);
  }

  onDelete(row: any) {
    this.rawData = this.rawData.filter((item) => item !== row);
    this.setPage({ offset: 0 });
  }
}

// let fields = row.Fields;
// inputFormFields: any = [];

// this.inputFormFields = [...this.inputFormFields, fields];

// console.log('form field', formField);

// console.log(this.toFormGroup([formField]));

// inputFormFields: any = [];
// this.inputFormFields = [...this.inputFormFields, formField];

// section: function for creating new form collection to add list table
// onSubmit() {
//   if (this.newForm.invalid) {
//     console.log('invalid');
//     return;
//   }
//   console.log(this.newForm.value);
// }
