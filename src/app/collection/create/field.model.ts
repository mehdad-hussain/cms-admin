export class field {
  // key: string = '';
  control: string = '';
  type: string = '';

  label: string = '';
  value: string = '';
  required: boolean = false;
  order: number = 0;
  placeholder: string = '';
  validators: string[] = [];

  options: { key: string; value: any }[] = [];
  bindLabel: string = '';
  bindValue: any = '';
  multiple: boolean = false;
  groupBy: string = '';
  searchable: boolean = false;
  clearable: boolean = false;
  closeOnSelect: boolean = false;
  addTag: boolean = false;
  disabled: boolean = false;
  loading: boolean = false;
  limit: number = 0;
  noResultsText: string = '';
}
