<template>
  <div class="box">
   <div class="rates">
     <div class="name_rate">1</div>
     <div class="name_rate">2</div>
     <div class="name_rate">3</div>
   </div>
    <div class="rate">
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=one?'color:red;':'color:#888'"
                                @click="one=6-i">☆</span></div>
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=two?'color:red;':'color:#888'"
                                @click="two=6-i">☆</span></div>
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=three?'color:red;':'color:#888'"
                                @click="three=6-i">☆</span></div>

    </div>
    <h1 class="rate_text text-5xl">{{ rate }}</h1>

    <!--  <div class="Chart">
        <DoughnutExample
            class="ch"
            ref="skills_chart"
            :chart-data="chartData"
            :options="options">
        </DoughnutExample>
      </div>-->



  </div>
</template>

<script>
//import DoughnutExample from '@/components/DoughnutExample'

const options = {
  maintainAspectRatio: false,
  animation: {
    animateRotate: false
  }
}

export default {
  name: "Rating",
 // components: {DoughnutExample},
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
  },
  mounted() {


  }
}
</script>

<style scoped>
.box{
  margin-top: 50px;
display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.rate{

}
.rate_text{
  width: 100px;
  text-align: center;
  left: 200px;
  top: 60px;
}
.rating{
  width: 150px;
}


</style>