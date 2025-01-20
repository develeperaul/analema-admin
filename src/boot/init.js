import { vMaska } from "maska/vue";

import { register } from "swiper/element/bundle";
// console.log(process.env);

// register Swiper custom elements
// console.log(register());

// register();

// or in case of CDN load
export default ({ app }) => {
  app.config.globalProperties.$PUBLICPATH = process.env.PUBLICPATH;
  console.log(vMaska);

  app.directive("maska", vMaska);
};

// export default {
//   directives: {mask}
// }
