import { TimeoutError, HTTPError } from "ky";
import { Notify } from "quasar";

export default ({ app }) => {
  app.config.errorHandler = (error, vm) => {
    errorHandler(error);
  };
  function errorHandler(err) {
    if (err instanceof HTTPError) {
      if (err.response.status === 404) {
        Notify.create({
          type: "negative",
          message: "Ресурс не найден.",
        });
      }
    }
  }
};
