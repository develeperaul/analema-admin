export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export type Order = {
  id: number;
  fast: null | {
    files: string[];
    text: string;
  };
  number: number;
  data: string;
  conf: null | string;
  summ: string;
  status: Status;
};

export type Status = { id: number; value: string };

export type Diler = {
  id?: number;
  name: string;
  yr_address: string;
  zone_action: string;
  phone: string;
  email: string;
  status: boolean;
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
  name: string;
  address: string;
  sait: string;
  phone: string;
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
