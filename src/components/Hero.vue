<template>
  <div class="hero">
    <h1
      class="hero-title"
      v-on:click="title_clicked = !title_clicked"
      v-html="title_clicked ? settings.hero_title_translation : settings.hero_title"
    />

    <h2
      v-on:click="subtitle_clicked = !subtitle_clicked"
      class="hero-subtitle"
      v-html="subtitle_clicked ? settings.hero_subtitle_translation : settings.hero_subtitle"
    />

    <div class="text-center my-3"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title_clicked: false,
      subtitle_clicked: false,
      settings: require("../../data/theme.json")
    };
  }
};
</script>

<style>
.translation {
  background-color: transparent;
}

.hero {
    text-align: center;
    width: 60vmax;
    max-width: 100%;
    margin: 0 auto;
    padding: 3vmax 0 6vmax 0;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.3em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
</style>
