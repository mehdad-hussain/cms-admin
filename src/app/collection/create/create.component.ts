import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { IPage, ModalService } from '@core';
import { FieldBase } from './field-base';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @Input() field!: FieldBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  public createFrom!: FormGroup;
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

  constructor(private fb: FormBuilder, public modal: ModalService) {}

  ngOnInit() {
    this.setPage({ offset: 0 });

    this.createFrom = this.fb.group({
      title: ['', Validators.required],
      placeholder: [''],
      validators: [[]],
    });

    this.modal.register(this.configModal);
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
    if (this.title.invalid) {
      return;
    }

    console.log(this.title.value);

    console.log(this.createFrom.value);
  }
}
