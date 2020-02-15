<template>
  <div class="badge">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>

    <div class="cell" v-for="index in (level%5)" :key="index"></div>
    <div class="cell" v-for="index in (level%5)" :key="index+level"></div>
    <div class="cell" v-for="index in (level%5)" :key="index+level*2"></div>

    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>   
  </div>
</template>

<script>
export default {
  props: {
    level: Number
  },
  mounted() {
    if (this.level > 5) {
      var cells = this.$el.querySelectorAll(".cell");
      console.log(cells);
      for (var cell of cells) {
        //console.log(cell)
        cell.classList.add("lvl2");
      }
    }
    if (this.level > 10) {
      var cells = this.$el.querySelectorAll(".cell");
      console.log(cells);
      for (var cell of cells) {
        //console.log(cell)
        cell.classList.add("lvl3");
      }
    }


  },
  lvl: require("../../static/frame.png"),
  lvl2: require("../../static/frame2.png"),
  lvl3: require("../../static/frame3.png")
};
</script>
<style>
.badge {
  display: inline-grid;
  position: absolute;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  margin: 2px;
}

.cell {
  background-image: url("../../static/frame.png");
  width: var(--max-size);
  height: var(--max-size);
  background-position-x: calc(0px - var(--min-size));
  background-position-y: calc(0px - var(--min-size));
}
.lvl1 {
  background-image: url("../../static/frame.png");
}
.lvl2 {
  background-image: url("../../static/frame2.png");
}
.lvl3 {
  background-image: url("../../static/frame3.png");
}
.cell:nth-child(3n-2) {
  width: var(--max-size);
  height: var(--min-size);
  background-position-x: calc(0px - var(--min-size));
  background-position-y: 0;
}
.cell:nth-child(3n) {
  width: var(--max-size);
  height: var(--min-size);
  background-position-x: calc(0px - var(--min-size));
  background-position-y: calc(0px - var(--min-size) - var(--max-size));
}
.cell:nth-child(1) {
  width: var(--min-size);
  background-position-x: 0;
  background-position-y: 0;
}
.cell:nth-child(2) {
  width: var(--min-size);

  background-position-y: calc(0px - var(--min-size));
  background-position-x: 0;
}
.cell:nth-child(3) {
  width: var(--min-size);
  background-position-y: calc(0px - var(--min-size) - var(--max-size));
  background-position-x: 0;
}
.cell:nth-last-child(3) {
  width: var(--min-size);
  background-position-x: calc(0px - var(--min-size) - var(--max-size));
  background-position-y: 0;
}
.cell:nth-last-child(2) {
  width: var(--min-size);
  background-position-x: calc(0px - var(--min-size) - var(--max-size));
  background-position-y: calc(0px - var(--min-size));
}
.cell:nth-last-child(1) {
  width: var(--min-size);
  /* background-position: calc(0 - var(--min-size) - var(--max-size))  calc(var(--min-size) + var(--max-size)) */
  background-position-x: calc(0px - var(--min-size) - var(--max-size));
  background-position-y: calc(0px - var(--min-size) - var(--max-size));
}
.cell {
  --min-size: 4px;
  --max-size: 8px;
  --v-shift: 0;
  --h-shift: 0;
}
</style>