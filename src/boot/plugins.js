export default ({ app }) => {
  app.use(
    (app.config.globalProperties.$copyMethod = async (e) => {
      if (navigator.clipboard) {
        try {
          if (e && e.target) {
            const text = e.target.textContent;
            if (text) {
              await navigator.clipboard.writeText(text);
              console.log("success");
            }
          }
        } catch (e) {
          throw e;
        }
      } else {
        // alert("Ваш браузер не может скопировать этот текст");
      }
    })
  );
};
