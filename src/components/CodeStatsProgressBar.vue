<template>
  <div class="bar">
    <strong>{{language.id}}</strong>
    level {{language.level}}
    <!-- <CodeStatsBadge :level="language.level"/> -->
    <br />
    ({{xpNotation(language.lang.xps)}} XP)
    {{ (language.lang.new_xps > 0) ? '(+' + xpNotation(language.lang.new_xps)+ ')' : '' }}
    <div
      class="progress"
      :style="{background: 'linear-gradient(to right,' + colors + ')'}"
    >{{language.percent.toFixed(0)}}%</div>
  </div>
</template>

<script>
import CodeStatsBadge from "@/components/CodeStatsBadge.vue"
export default {
  props: {
    colors: String,
    language: Object
  },
  methods: {
    xpNotation: function(xp) {
      return xp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  },
  components: {
    CodeStatsBadge
  }
};
</script>
<style>
.bar {
  font-size: 0.75rem;
  text-align: left;
}
.progress {
  border-radius: 4px;
  margin: 2px 0;
  padding: 0;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 500;
  color: black;
}
</style>