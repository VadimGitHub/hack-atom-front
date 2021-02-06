<template>
  <div>
    <div class="box bg-white shadow mx-auto mt-2 p-8 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
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
      <div class="rate_text">
        <div>{{one}}</div>
        <div>{{two }}</div>
        <div>{{three}}</div>
      </div>

    </div>

  </div>
</template>

<script>
//import DoughnutExample from '@/components/DoughnutExample'
import axios from "axios";


export default {
  name: "Rating",
  // components: {DoughnutExample},
  props: ["id","rateMas"],
  methods:{

  },
  data() {
    return {
      one: 0,
      two: 0,
      three: 0,


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
        criteriaId: this.rateMas[1].criteriaId
      })
    },
    three:function (n) {
      axios.post('mark/create',{
        projectId:this.id,
        mark: n,
        criteriaId: this.rateMas[2].criteriaId
      })
    },

  },
  computed: {
    rate() {
      return Number(this.one) + Number(this.two) + Number(this.three);
    }
  },
  async mounted() {


  }
}
</script>

<style scoped>
.box {
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