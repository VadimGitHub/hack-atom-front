<template>
  <div>
    <section class="text-gray-700">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            {{ project.projectName }}
          </h1>
          <p class="text-base leading-relaxed xl:w-32/4 lg:w-3/4 mx-auto">
            {{ project.projectTarget }}
          </p>
        </div>
        <Stages :status="project.status" :id="project.id" />
        <p v-if="project.status < 4" class="text-xs text-center opacity-40">Вы можете заполнить {{ project.status + 1 }} этап, для этого нажмите на его название.</p>
        <div class="md:grid md:grid-cols-4 md:gap-6 mt-16 items-center">
          <div class="md:col-span-1">
            <Plank :title="'Набранный рейтинг'" :content="outRating"/>
          </div>
          <Rating class="col-span-2" :id="id" :rate-mas="rateMas"/>
          <div class="md:col-span-1">
            <Plank :title="'До конца конкурса'" :content="'14 дней'"/>
          </div>
          <div class="md:col-span-1">
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import Plank from "@/components/project/Plank";
import Stages from "@/components/Stages";
import Rating from '@/components/Rating';
import axios from "axios";

export default {
  props: ['project'],
  components: {
    Plank,
    Stages,
    Rating
  },
  data(){
    return{
      id: this.$route.params.id,
      raring:"",
      rateMas: [],
      outRating: ""

    }
  },
  methods:{
    calcRating(data){
      const Rating =Number(data[0].mark) + Number(data[1].mark) + Number(data[2].mark);
      return Rating
    }
  },
  async created() {
    this.rateMas= await axios.get(`/mark/getByProject/${this.id}`)
        .then(res => {
          console.log(res.data)
          this.outRating = this.calcRating(res.data)
          return res.data
        })
  }


}
</script>

<style scoped>

</style>