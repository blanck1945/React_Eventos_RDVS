export interface Global {
  full: boolean;
  display: string;
  errors: Errors[];
  country: string;
  loading: boolean;
  searchValue: string;
  faqs: FAQS[];
}

export interface FAQS {
  id: number;
  question: string;
  headers: string[];
  anwsers: string[];
  openFaq: boolean;
}

export interface Errors {
  errorName: any;
  code: any;
}
