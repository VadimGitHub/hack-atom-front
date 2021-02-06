<template>
  <div>
    <div class="px-6 py-8">
      <div class="flex justify-between container mx-auto">
        <div class="w-full">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <Span1 v-for="(ad, i) in ads" :key="i">
              <CardAd
                  class="mb-5 sm:mb-0"
                  :id="ad.id"
                  :email="ad.userEmail"
                  :title="ad.name"
                  :content="ad.content" />
            </Span1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Span1 from "@/components/Span1";
import CardAd from "@/components/home/CardAd";

export default {
  props: ['limit', 'offset', 'enableScroll', 'url'],
  data() {
    return {
      ads: {},
    };
  },
  components: {
    Span1,
    CardAd
  },
  mounted() {
    this.axios.get(this.url, {
      params: {
        limit: this.limit,
        offset: 0
      }
    }).then(res => {
      this.ads = res.data
    }).catch(error => {
      console.log(error)
    });
  }
}
</script>