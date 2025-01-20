import { vMaska } from "maska/vue";

// or in case of CDN load
export default ({ app }) => {
  app.config.globalProperties.$PUBLICPATH = process.env.PUBLICPATH;

  app.directive("maska", vMaska);
};
