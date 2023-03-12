import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { IPage, ModalService } from '@core';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public createForm!: FormGroup;
  public newForm!: FormGroup;
  selectedCar!: 1;

  configModal = 'configModal';
  typeSettingModal = 'typeSettingModal';
  selectedType = '';

  title = new FormControl('', [Validators.required]);

  collectionTypes = [
    { id: 1, name: 'String', title: '', placeholder: '', validators: [] },
    { id: 2, name: 'Text', title: '', placeholder: '', validators: [] },
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

  page: IPage = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0,
  };

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  rawData = [
    {
      id: 1,
      name: 'Leanne Graham',
      address: 'Kulas Light',
      city: 'Gwenborough',
      state: 'NY',
      zip: '92998-3874',
      phone: '1-770-736-8031 x56442',
      email: 'fake@mail.com',
      company: 'Romaguera-Crona',
      date: '2019-01-21',
      status: 'active',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      address: 'Victor Plains',
      city: 'Wisokyburgh',
      state: 'NY',
      zip: '90566-7771',
      phone: '010-692-6593 x09125',
      email: 'temp@mail.com',
      company: 'Deckow-Crist',
      date: '2019-01-21',
      status: 'active',
    },
    {
      id: 3,
      name: 'Ervin Howell',
      address: 'Victor Plains',
      city: 'Wisokyburgh',
      state: 'NY',
      zip: '90566-7771',
      phone: '010-692-6593 x09125',
      email: 'temp@mail.com',
      company: 'Deckow-Crist',
      date: '2019-01-21',
      status: 'active',
    },
    {
      id: 4,
      name: 'Ervin Howell',
      address: 'Victor Plains',
      city: 'Wisokyburgh',
      state: 'NY',
      zip: '90566-7771',
      phone: '010-692-6593 x09125',
      email: 'temp@mail.com',
      company: 'Deckow-Crist',
      date: '2019-01-21',
      status: 'active',
    },
    {
      id: 5,
      name: 'Ervin Howell',
      address: 'Victor Plains',
      city: 'Wisokyburgh',
      state: 'NY',
      zip: '90566-7771',
      phone: '010-692-6593 x09125',
      email: 'temp@mail.com',
      company: 'Deckow-Crist',
      date: '2019-01-21',
      status: 'active',
    },
  ];

  data: any = [];

  constructor(
    private fb: FormBuilder,
    public modal: ModalService,
    service: QuestionService
  ) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit() {
    this.setPage({ offset: 0 });

    this.createForm = this.fb.group({
      title: ['', Validators.required],
      placeholder: [''],
      required: [false],
      maxLength: [null],
      minLength: [null],
      maxValue: [null],
      minValue: [null],
      pattern: [''],
      patternMessage: [''],
      email: [false],
    });

    this.modal.register(this.configModal);
    this.newForm = this.toFormGroup(this.newField);

    console.log('newForm', this.newForm);
    console.log('createForm', this.createForm);
  }

  ngOnDestroy(): void {
    this.modal.unregister(this.configModal);
    this.modal.unregister(this.typeSettingModal);
  }

  setPage(pageInfo: any) {
    console.log(pageInfo);
    this.page.pageNumber = pageInfo.offset;
    this.page.size = 2;
    this.page.totalElements = 5;
    this.data = this.rawData.slice(this.page.pageNumber * this.page.size);
    console.log(this.data);
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

  createField() {
    // if (this.title.invalid) {
    //   return;
    // }

    if (this.createForm.invalid) {
      console.log('invalid');
      console.log(this.createForm.hasError('required', ['multiple']));
    }

    console.log(this.title.value);

    console.log(this.createForm.value);
  }

  // section: dynamic form

  questions$: Observable<QuestionBase<any>[]>;

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
          } else {
            validators.push([]);
          }
        });
      } else {
        validators = [];
      }

      console.log('toFormGroup', field.control, field.value, validators);

      group[field.control] = new FormControl(field.value || null, validators);
    });

    return new FormGroup(group);
  }

  newField = [
    {
      control: 'name',
      label: 'Name',
      type: 'text',
      options: [],
      validators: [
        {
          name: 'required',
          message: 'Name is required',
        },
        {
          name: 'minLength',
          message: 'Name must be at least 3 characters long',
          value: 3,
        },
      ],
    },
    {
      control: 'cars',
      label: 'Cars',
      type: 'select',
      options: [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
      ],
      validators: [
        {
          name: 'required',
          message: 'Name is required',
        },
      ],
    },
  ];

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

  openTab = 1;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
