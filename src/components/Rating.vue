<template>
  <div>
    <div class="box">
      <div class="rates">
        <div class="name_rate" v-for="(item,i) in rateMas.slice(0,3)" :key="i">{{ item.criteriaName +" - "+ item.mark }}</div>
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

  </div>
</template>

<script>
//import DoughnutExample from '@/components/DoughnutExample'
import axios from "axios";

const options = {
  maintainAspectRatio: false,
  animation: {
    animateRotate: false
  }
}
export default {
  name: "Rating",
  // components: {DoughnutExample},
  props: ["id"],
  methods:{

  },
  data() {
    return {
      options,
      one: 0,
      two: 0,
      three: 0,
      rateMas: [],
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
    one:function (n) {
     axios.post('mark/create',{
        projectId:this.id,
        mark: n,
        criteriaId: this.rateMas[0].criteriaId
      })
    },
    two:function (n) {
      axios.post('mark/create',{
        projectId:this.id,
        mark: n,
        criteriaId: this.rateMas[0].criteriaId
      })
    },
    three:function (n) {
      axios.post('mark/create',{
        projectId:this.id,
        mark: n,
        criteriaId: this.rateMas[0].criteriaId
      })
    },

  },
  computed: {
    rate() {
      return Number(this.one) + Number(this.two) + Number(this.three);
    }
  },
  async mounted() {
    this.rateMas = await axios.get(`/mark/getByProject/${this.id}`)
        .then(res => {
          console.log(res.data)
          return res.data
        })

  }
}
</script>

<style scoped>
.box {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.rate {

}

.rate_text {
  width: 100px;
  text-align: center;
  left: 200px;
  top: 60px;
}

.rating {
  width: 150px;
}


</style>