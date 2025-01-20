import { api } from "./init";

export const getOnlineSceneList = (history = false) => {
  return api
    .mainKy(`online-scene_list.php${history ? "?history=true" : ""}`)
    .json();
};
export const getRequest = (id) => {
  return api.mainKy(`request.php?id=${id}`).json();
};
export const updateRequest = (obj) => {
  const body = new FormData();
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      console.log(key);
      console.log(obj[key]);
      if (obj[key].length > 0) {
        // body.append(key+"[]", obj[key])
        for (let item of obj[key]) {
          body.append(key + "[]", item);
        }
      } else body.append(key + "[]", "");
    } else {
      body.append(key, obj[key]);
    }
  }
  return api.mainKy.post("update_req.php", { body }).json();
};
