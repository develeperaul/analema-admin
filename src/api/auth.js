import { api } from "./init";

export const auth = (email, pass) => {
  const body = new FormData();
  body.append("email", email);
  body.append("pass", pass);
  return api.mainKy.post("auth.php", { body }).json();
};
export const restore = (email) => {
  const body = new FormData();
  body.append("email", email);
  return api.mainKy.post("pass.php", { body }).json();
};
