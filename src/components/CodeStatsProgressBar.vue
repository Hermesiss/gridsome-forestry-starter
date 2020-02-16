<template>
  <div class="bar">
    <strong>{{language.id}}</strong>
    level {{language.level}}
    <CodeStatsBadge
      :level="language.level%5 == 0? 5:language.level%5"
      :minSize="3"
      :maxSize="10"
      :grade="Math.floor(language.level%5 == 0? language.level/5-1 : language.level/5)"
      v-if="language.level > 0 && language.id!='Total'"
    />
    <br />

    <div class="progress" :style="{background: 'linear-gradient(to right,' + colors + ')'}">
      <span>
        ({{xpNotation(language.lang.xps)}} XP)
        {{ (language.lang.new_xps > 0) ? '(+' + xpNotation(language.lang.new_xps)+ ')' : '' }}
      </span>
      <span style="float:right;">{{language.percent.toFixed(0)}}%</span>
    </div>
  </div>
</template>

<script>
import CodeStatsBadge from "@/components/CodeStatsBadge.vue";
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
  padding: 1px 2px;
  font-size: 0.75rem;
  text-align: left;
  font-weight: 500;
  color: black;
}
</style>