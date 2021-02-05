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
        <Stages :status="project.status" />

        <div class="md:grid md:grid-cols-4 md:gap-6 mt-16">
          <div class="md:col-span-1">
            <Plank :title="'Набранный рейтинг'" :content="'238 очков'"/>
          </div>
          <div class="md:col-span-1">
            <Plank :title="'Пользователей'" :content="'14 '"/>
          </div>
          <div class="md:col-span-1">
            <Plank :title="'До конца конкурса'" :content="'14 дней'"/>
          </div>
          <div class="md:col-span-1">
            <Plank/>
          </div>
        </div>
        <Rating :id="id"/>

      </div>
    </section>
  </div>
</template>

<script>
import Plank from "@/components/project/Plank";
import Stages from "@/components/Stages";
import Rating from '@/components/Rating';

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
      raring:""
    }
  },


}
</script>

<style scoped>

</style>