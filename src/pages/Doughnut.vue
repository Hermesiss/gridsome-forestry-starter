/// https://vue-chartjs.org/
<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ["1", "2", "3"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#999",
          data: [40, 20, 10, 5]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
};
</script>