<template>
  <div id="codersrank" :username="username"></div>
</template>

<script>
const setAttr = (container, widget, attr) => {
  widget.setAttribute(attr, container.getAttribute(attr));
};

export default {
  data: () => ({}),
  mounted() {
    let scriptElement = document.createElement("script");
    scriptElement.setAttribute(
      "src",
      "https://profile.codersrank.io/widget/widget.js"
    );
    scriptElement.async = true;
    document.head.appendChild(scriptElement);
    let widgetContainer = document.getElementById("codersrank");
    let widget = document.createElement("codersrank-widget");
    setAttr(widgetContainer, widget, "username");
    //widget.setAttribute('username', widgetContainer.getAttribute('username'))
    widgetContainer.appendChild(widget);
  },
  props: {
    username: String
  }
};
</script>
<style>
codersrank-widget {
  --head-bg-color: var(--color-base-1);
  --bg-color: var(--color-base);
  --badge-bg-color: var(--color-base-1);
  --badge-text-color: var(--color-contrast);
}
</style>

// <CodersRank username="hermesiss" />
// import CodersRank from "./CodersRank.vue";

//   components: {
//     CodersRank
//   }