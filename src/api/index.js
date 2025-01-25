import { api } from "./init";

export const sendMess = (title, body, fcmtoken) => {
  return api
    .mainKy(
      `http://b2b.oknascaner.ru/api/fcm_push.php?title=${title}&body=${body}&token=${fcmtoken}`
    )
    .json();
};

export const getToken = (token) => {
  return api.mainKy(`get_token.php?token=${token}`).json();
};

export const setInfoPushData = (userID, title, bodyMess) => {
  const body = new FormData();
  body.append("recipients[]", userID);
  body.append("title", title);
  body.append("body", bodyMess);

  return api.mainKy.post("set_info_push.php", { body }).json();
};
