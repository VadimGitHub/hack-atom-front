<template>
  <div class="box">
    <div class="rate">
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=one?'color:red;':'color:#888'"
                                @click="one=6-i">☆</span></div>
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=two?'color:red;':'color:#888'"
                                @click="two=6-i">☆</span></div>
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=three?'color:red;':'color:#888'"
                                @click="three=6-i">☆</span></div>

    </div>
    <h1 class="rate_text text-5xl">{{ rate }}</h1>

      <div class="Chart">
        <DoughnutExample
            class="ch"
            ref="skills_chart"
            :chart-data="chartData"
            :options="options">
        </DoughnutExample>
      </div>



  </div>
</template>

<script>
import DoughnutExample from '@/components/DoughnutExample'

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateRotate: false
  }
}

export default {
  name: "Rating",
  components: {DoughnutExample},
  data() {
    return {
      options,
      one: 0,
      two: 0,
      three: 0,
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ["#ff0000"],
            data: [0, 15]
          },
        ]
      }
    }
  },
  watch: {
    rate: function (n, o) {
      console.log(n, o)
      this.chartData.datasets[0].data[0] = n
      this.chartData.datasets[0].data[1] = n - 15
      this.$refs.skills_chart.update();
    }
  },
  computed: {
    rate() {

      return Number(this.one) + Number(this.two) + Number(this.three);
    }
  }
}
</script>

<style scoped>
.box{
  margin-left:120px ;
  margin-top: 50px;
  width: 500px;
  position: relative;
}
.rate{
  position: absolute;
  top:40px;
}
.rate_text{
  position: absolute;
  width: 100px;
  text-align: center;
  left: 200px;
  top: 60px;
}
.rating{
  width: 150px;
}


</style>