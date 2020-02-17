<template>
  <div>
    <div class="progress-caption">
      {{username}}
      <CodeStatsProgressBar
        v-for="item in level"
        :key="item.id"
        :colors="item.colors"
        :language="item"
      />
    </div>
    <div :class="type=='progress' ? 'progress-bars' : 'progress-circles'">
      <CodeStatsProgressBar
        v-for="item in languagesSliced"
        :key="item.id"
        :colors="item.colors"
        :language="item"
        :type="type"
      />
    </div>
    <div class="codestats-link">
      Code levels from
      <a :href="'https://codestats.net/users/' + this.username">codestats.net</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CodeStatsProgressBar from "@/components/CodeStatsProgressBar.vue";
export default {
  computed: {
    languagesSliced() {
      return this.count ? this.languages.slice(0, this.count) : this.languages;
    }
  },

  data() {
    return {
      languages: [],
      level: []
    };
  },
  components: {
    CodeStatsProgressBar
  },
  props: {
    username: String,
    type: {
      content: String,
      default: "progress"
    },
    count: {
      content: Number
    }
  },
  async mounted() {
    try {
      const results = await axios.get(
        "https://codestats.net/api/users/" + this.username
      );

      const sortable = [];

      for (const item in results.data.languages) {
        sortable.push({
          id: item,
          lang: results.data.languages[item],
          colors: ""
        });
      }

      sortable.sort(function(a, b) {
        return b.lang.xps - a.lang.xps;
      });
      const level_factor = 0.025;

      const getLevel = function(xp) {
        return Math.floor(Math.sqrt(xp) * level_factor);
      };

      const getPercentage = function(xp) {
        var level = getLevel(xp);
        var levelLow = getLevelFloor(level);
        var levelHigh = getLevelFloor(level + 1);
        return ((xp - levelLow) / (levelHigh - levelLow)) * 100;
      };

      const getLevelFloor = function(level) {
        return Math.pow(Math.ceil(level / level_factor), 2);
      };

      const prepareItem = function(item) {
        var percent = getPercentage(item.lang.xps);
        var colorPercent = getPercentage(item.lang.xps - item.lang.new_xps);
        item.level = getLevel(item.lang.xps);
        item.percent = percent;
        item.colorPercent = colorPercent;
        item.colors = `#6EC06E ${colorPercent}%, #F2B866 ${colorPercent}%, #F2B866 ${percent}%, #DDDDDD 0`;
        return item;
      };
      this.level[0] = JSON.parse(JSON.stringify(sortable[0]));

      this.level[0].id = "Total";
      this.level[0].lang.xps = 0;
      this.level[0].lang.new_xps = 0;
      for (var item of sortable) {
        this.level[0].lang.xps += item.lang.xps;
        this.level[0].lang.new_xps += item.lang.new_xps;
      }
      prepareItem(this.level[0]);

      //if (sortable.length > 16) sortable.length = 16;

      this.languages = sortable;

      for (const item of sortable) {
        prepareItem(item);
        // var percent = getPercentage(item.lang.xps);
        // var colorPercent = getPercentage(item.lang.xps - item.lang.new_xps);
        // item.level = getLevel(item.lang.xps);
        // item.percent = percent;
        // item.colors = `#6EC06E ${colorPercent}%, #F2B866 ${colorPercent}%, #F2B866 ${percent}%, #DDDDDD 0`;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style>
.progress-caption {
  margin: 0.75rem;
}
.codestats-link {
  font-size: 0.75rem;
}
.progress-bars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  align-items: center;
}
.progress-circles {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0;
  align-items: center;
}

@media (max-width: 580px) {
  .progress-circles {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
CodeStatsProgressBar {
  /* grid-column: auto / span 1; */
  text-align: center;
}
</style>