export interface Option {
  id: number | string;
  label: string;
}

export interface Windows {
  type: number;
  length: string;
  width: string;
  sash: Option[];
}
export interface Parametrs {
  additions: Option[];
  windowsill: boolean;
  energysaving: boolean;
  multiglased: boolean;
  slopes: boolean;
  sill: {
    deep: number | null;
    width: number | null;
  };
  double_glazing: Option;
  profile_system: Option;
  furniture: Option;
  colors: {
    external: Option;
    internal: Option;
  };
}

export interface Wishes {
  text: string;
  type: null | Option;
  mounting: boolean;
  email: string;
  measurement_date: {
    date: string;
    time: Option;
  };
  elevator: Option;
  diller: Option;
}

export interface Configure {
  windows: Windows;
  parametrs: Parametrs;
  // wishes: Wishes;
}

export interface ConfigureOrder {
  id: number;
  configuration: Configure;
}

export interface Order {
  configure: ConfigureOrder[];
  data: OrderFields;
  date: string;
}

export interface ActiveOrder {
  configure: string;
  data: OrderFields;
  date: string;
  id: number;
  status: string;
  status_id: number | string;
  count: number;
}

export interface OrderFields {
  name: string;
  address: string;
  phone: string;
  email: string;
}
