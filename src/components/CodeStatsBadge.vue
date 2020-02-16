<template>
  <div class="badge" :style="'--min-size:' + minSize + 'px; --max-size:' + maxSize + 'px; --v-shift:' + grade + ';'">
    <div class="cell cell-top left"></div>
    <div class="cell left"></div>
    <div class="cell bottom left"></div>

    <div v-for="index in (level*3)" :key="index" :class="'cell ' + classes[(index-1)%3]"></div>

    <div class="cell cell-top right"></div>
    <div class="cell right"></div>
    <div class="cell bottom right"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: ["cell-top", "middle", "bottom"]
    };
  },
  props: {
    level: Number,
    minSize: Number,
    maxSize: Number,
    grade: Number
  },
  lvl: require("../../static/frame.png")  
};
</script>
<style>
.badge {
  display: inline-grid;
  position: absolute;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  margin: 0 2px;
}
.cell {
  background-image: url("../../static/frame.png");
  width: var(--max-size);
  height: var(--max-size);
  background-position-x: calc(0px - var(--min-size));
  background-position-y: calc(0px - var(--min-size) - var(--v-shift)*(var(--min-size)*2 + var(--max-size)));
}
.cell.cell-top,
.cell.bottom {
  height: var(--min-size);
}
.cell.left,
.cell.right {
  width: var(--min-size);
}
.cell.cell-top {
  background-position-y: calc(var(--v-shift) * (var(--min-size) * -2 - var(--max-size)));
}
.cell.bottom {
  background-position-y: calc(0px - var(--min-size) - var(--max-size) - var(--v-shift)*(var(--min-size)*2 + var(--max-size)));
}
.cell.left {
  background-position-x: 0;
}
.cell.right {
  background-position-x: calc(0px - var(--min-size) - var(--max-size));
}
.cell {
  --min-size: inherit;
  --max-size: inherit;
  --v-shift: inherit;
}
</style>