export interface Profile {
  role: "fiz" | "yr";
  name: string;
  phone: string;
  address: string;
  avatar: boolean | object;
  email: string;
}

export interface ProfileUpdate {
  name?: string;
  phone?: string;
  address?: string;
  avatar?: boolean | File;
  email?: string;
}
