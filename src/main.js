import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import "@/assets/code-highlight.css"

config.autoAddCss = false;
library.add(faGithub, faTwitter);

export default function (Vue, { head }) {
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };

  head.meta.push({
    name: 'keywords',
    content: 'Unity,XR,C#,JavaScript'
  })

  head.meta.push({
    property: 'og:image',    
    content: settings.siteUrl + "/portfolio/logo-og.jpg"
  })

}


