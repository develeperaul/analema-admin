import { Option } from "src/models/model-select";

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export type Order = {
  id: number;
  date: string;
  data: string;
  status: Status;
  status_id: string | number;
  summ: string;
  contact_fio: string;
  contact_phone: string;
  contact_address: string;
  contact_city: string;
  documents: string[];
  fast_order: "0" | "1";
  fast_photo: string[];
  documents_ur: string[];
  text: string;
  diler_status: number;
  // fast: null | {
  //   files: string[];
  //   text: string;
  // };
  // conf: null | string;
};
export type OrderList = {
  id: string;
  date: string;
  data: string;
  status: Status;
  status_id: string | number;
  summ: string;
};
export type Status = { id: number; value: string };

export type Diler = {
  id: string;
  nazvanie: string;
  city: string;
  phone: string;
  active: "Y" | "N" | boolean;
  address: string;
  email: string;
};
export type NewDiler = {
  nazvanie: string;
  name: string;
  "last-name": string;
  "second-name": string;
  phone: string;
  yraddress: string;
  email: string;
  password: string;
  inn: string;
  ogrn: string;
  rekvizity: string;
  address: string;
  city: string;
};

export type Notification = {
  id: number;
  date: string;
  text: string;
  status: { id: number; value: string };
};

export type Application = {
  id: number;
  name: string;
  phone: string;
  order_numb: number;
  status: { id: number; value: string };
};

export type ProfileCompany = {
  id: string;
  nazvanie: string;
  site: string;
  phone: string;
  zona: string;
  vk: string;
  ok: string;
  telegram: string;
  address: string;
  email: string;
};

export type Promotion = {
  name: string;
  short_description: string;
  description: string;
  dateCreate: string;
  dateFrom: string;
  image: string;
  for: "client" | "diler";
};


export interface StatisticsI {
  count: number;
  summ: number;
  countStart: number;
  summStart: number;
  countEnd: number;
  summEnd: number;
}
