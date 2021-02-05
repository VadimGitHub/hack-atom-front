<template>
  <div>
    <div class="text-center">
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Найди себе команду
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Найди таких же увлеченных людей как ты и работайте вместе над общей идеей!
      </p>
    </div>

    <div class="px-6 py-8">
      <div class="flex justify-between container mx-auto">
        <div class="w-full">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <Span1 v-for="(ad, i) in ads" :key="i">
              <CardAd class="mb-5 sm:mb-0" :title="'Ищу толкового дизайнера'" :content="'Ищем любого рукастого ногастого'" />
            </Span1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardAd from "@/components/home/CardAd";
import Span1 from "@/components/Span1";

export default {
  data() {
    return {
      ads: [1, 2, 3, 4, 4, 4],
    };
  },
  components: {
    Span1,
    CardAd
  },
  mounted() {
    this.axios.get('/project/cards', {
      params: {
        limit: 6,
        offset: 0
      }
    }).then(res => {
      console.log(res)
      // this.ads = res.data
    }).catch(error => {
      console.log(error)
    });
  }
}
</script>

<style scoped>

</style>