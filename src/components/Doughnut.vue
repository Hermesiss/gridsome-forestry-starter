/// https://vue-chartjs.org/

<script>
import { Pie } from "vue-chartjs";
import { labels } from "chartjs-plugin-labels";
import axios from "axios";
export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "Data",
          backgroundColor: [],
          borderColor: "#333",
          borderWidth: 1,
          data: []
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Codestats.net data",
        fontSize: 18
      },
      plugins: {
        labels: {
          fontColor: "#fff",
          position: "outside",
          textMargin: 4,
          fontSize: 12,
          render: function(args) {
            if (args.index < 6) return args.label;
          }
        }
      }
    }
  }),
  async mounted() {
    try {
      const results = await axios.get(
        "https://codestats.net/api/users/Hermesis"
      );

      const sortable = [];

      for (const item in results.data.languages) {
        sortable.push([item, results.data.languages[item].xps]);
      }

      sortable.sort(function(a, b) {
        return b[1] - a[1];
      });

      var theshold = 1000;

      for (const item of sortable) {
        if (item[1] > theshold) {
          this.chartdata.labels.push(item[0]);
          this.chartdata.datasets[0].data.push(item[1]);
          this.chartdata.datasets[0].backgroundColor.push(
            "#" +
              (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
          );
        }
      }

      this.renderChart(this.chartdata, this.options);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>