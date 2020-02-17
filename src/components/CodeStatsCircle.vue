<template>
<div class="level-root">
  <div class="circle-badge">
    <svg class="progress-ring">
      <circle
        class="progress-ring__circle"
        :fill="gradeColors[grade]+'22'"
        :stroke="gradeColors[grade]+'30'"
        stroke-width="2"
        :r="radius-2"
        :cx="radius"
        :cy="radius"
        :style="'stroke-dasharray: '+ (getLine() + ' ' + getGap() + ' ').repeat(5)+' 0 360;'"
      />
    </svg>
    <svg class="progress-ring" v-for="index in level" :key="index">
      <circle
        class="progress-ring__circle"
        fill="transparent"
        :stroke="gradeColors[grade] + (index == level? '' : '88')"
        stroke-width="4"
        :r="radius-2"
        :cx="radius"
        :cy="radius"
        :style="'stroke-dasharray: 0 '+((getLine()+getGap())*(index-1))+' ' + ((index < level) ? getLine() : getLine()*percent/100) +' 360;'"
      />
    </svg>
    <div class="circle-lang">{{lang}}</div>
  </div>
  <div class="circle-level" :style="'border-color: ' + gradeColors[grade]">Level {{fullLevel}}</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      radius: 40,
      gap: 8,
      line: 47,
      gradeColors: ["#8D87A8", "#4746EA", "#259AE9", "#0ABCBC", "#71CC63","#F7BA3D", "#F8FA13", "#FF0000"]
    };
  },
  methods: {
    getGap: function() {
      return (this.gap / 60) * this.radius;
    },
    getLine: function() {
      return (this.line / 60) * this.radius;
    }
  },
  props: {
    level: Number,
    grade: Number,
    percent: Number,
    lang: String,
    fullLevel: Number
  }
};
</script>
<style>
.level-root{
  display: table-cell;  
}
.circle-level{
  text-align: center; 
  position: relative;  
  bottom: 20px;  
  margin: 0 18px;
  border: black solid 2px;
  border-radius: 4px;
}
.circle-lang {
  text-align: center;
  width: 60px;
  margin: 0;  
}
.circle-badge {
  height: 80px;
  width: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress-ring {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(135deg);
  height: 80px;
  width: 80px;
}
</style>