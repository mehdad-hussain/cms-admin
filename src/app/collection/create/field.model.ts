// class field {
//   control: string = '';
//   type: string = '';

//   label: string = '';
//   value: string = '';
//   order: number = 0;
//   disabled: boolean = false;
//   readonly: boolean = false;
//   placeholder: string = '';
//   validators: string[] = [];
// }

// class text extends field {
//   minLength?: number;
//   maxLength?: number;

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//     this.minLength = params.minLength || 0;
//     this.maxLength = params.maxLength || 0;
//   }
// }

// class numberF extends field {
//   min?: number;
//   max?: number;

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//     this.min = params.min || undefined;
//     this.max = params.max || undefined;
//   }
// }

// class textarea extends field {
//   rows?: number;
//   cols?: number;

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//     this.rows = params.rows || 3;
//     this.cols = params.cols || 3;
//   }
// }

// class select extends field {
//   options: { key: string; value: any }[] = [];
//   bindLabel: string = '';
//   bindValue: any = '';
//   searchable: boolean = false;
//   clearable: boolean = false;
//   closeOnSelect: boolean = false;
//   loading: boolean = false;
//   groupBy: string = '';
//   noResultsText: string = '';

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];

//     this.options = params.options || [];
//     this.bindLabel = params.bindLabel || '';
//     this.bindValue = params.bindValue || '';
//     this.searchable = params.searchable || false;
//     this.clearable = params.clearable || false;
//     this.closeOnSelect = params.closeOnSelect || false;
//     this.loading = params.loading || false;
//     this.groupBy = params.groupBy || '';
//     this.noResultsText = params.noResultsText || '';
//   }
// }

// class multiSelect extends select {
//   multiple: boolean = false;

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//   }
// }

// class checkbox extends field {
//   checked: boolean = false;

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//   }
// }

// class radio extends field {
//   options: { key: string; value: any }[] = [];

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//   }
// }

// class date extends field {
//   dateFormat: string = '';

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//   }
// }

// class time extends field {
//   timeFormat: string = '';

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//   }
// }

// class dateTime extends field {
//   dateFormat: string = '';
//   timeFormat: string = '';

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//   }
// }

// class file extends field {
//   accept: string = '';
//   multiple: boolean = false;
// }

// class image extends field {
//   accept: string = '';
//   multiple: boolean = false;
// }

// class video extends field {
//   accept: string = '';
//   multiple: boolean = false;

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//   }
// }

// class pdf extends field {
//   accept: string = '';
//   multiple: boolean = false;

//   constructor(params: any = {}) {
//     super();
//     this.control = params.control || '';
//     this.type = params.type || '';
//     this.label = params.label || '';
//     this.value = params.value || '';
//     this.order = params.order || 0;
//     this.disabled = params.disabled || false;
//     this.readonly = params.readonly || false;
//     this.placeholder = params.placeholder || '';
//     this.validators = params.validators || [];
//   }
// }

// // prettier-ignore
// export { text, numberF, textarea, select, multiSelect, checkbox, radio, date, time, dateTime, file, image, video, pdf };

interface IField {
  control: string | any;
  type: string;

  label?: string;
  value?: string | number | boolean | any[] | null;
  order?: number;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  validators?: {
    name: string;
    message?: string;
    value?: any;
  }[];
}

interface IText extends IField {
  minLength?: number;
  maxLength?: number;
}

interface INumber extends IField {
  min?: number;
  max?: number;
}

interface ITextarea extends IField {
  rows?: number;
  cols?: number;
}

interface ISelect extends IField {
  options: { key: string; value: any }[];
  bindLabel?: string;
  bindValue?: any;
  searchable?: boolean;
  clearable?: boolean;
  closeOnSelect?: boolean;
  loading?: boolean;
  groupBy?: string;
  noResultsText?: string;
}

interface IMultiSelect extends ISelect {
  multiple: boolean;
}

interface ICheckbox extends IField {
  checked: boolean;
}

interface IRadio extends IField {
  options: { key: string; value: any }[];
}

interface IDate extends IField {
  dateFormat: string;
}

interface ITime extends IField {
  timeFormat: string;
}

interface IDateTime extends IField {
  dateFormat: string;
  timeFormat: string;
}

interface IFile extends IField {
  accept: string;
  multiple: boolean;
}

export {
  IText,
  INumber,
  ITextarea,
  ISelect,
  IMultiSelect,
  ICheckbox,
  IRadio,
  IDate,
  ITime,
  IDateTime,
  IFile,
};
