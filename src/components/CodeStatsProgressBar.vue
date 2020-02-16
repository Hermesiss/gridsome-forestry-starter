<template>
  <div class="progress-root" v-bind:class="{'circle-root': type=='circle'}">
    <div v-if="type=='progress'" class="bar">
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
    <div v-if="type=='circle'" class="circle">      
      <CodeStatsCircle
        :level="language.level%5 == 0? 5:language.level%5"       
        :grade="Math.floor(language.level%5 == 0? language.level/5-1 : language.level/5)"
        :percent="language.percent"
        :lang="language.id"
        :fullLevel="language.level"
        v-if="language.level > 0 && language.id!='Total'"
      />
      
    </div>
  </div>
</template>

<script>
import CodeStatsBadge from "@/components/CodeStatsBadge.vue";
import CodeStatsCircle from "@/components/CodeStatsCircle.vue";
export default {
  props: {
    colors: String,
    language: Object,
    type: {
      content: String,
      default: "progress"
    }
  },
  methods: {
    xpNotation: function(xp) {
      return xp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  },
  components: {
    CodeStatsBadge,
    CodeStatsCircle
  }
};
</script>
<style>
.progress-root {
  font-size: 0.75rem;
  align-content: center;
  text-align:center;
}
.circle-root{
  margin: 0 auto;  
}

.circle{
  text-align:center;
  align-content: center;  
}
.bar {
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