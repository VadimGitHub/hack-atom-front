<template>
  <div class="py-6 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <Header />
      <Detailed />
      <Advantages />

    </div>
  </div>
</template>

<script>

import Header from "@/components/ project/Header";
// import Authors from "@/components/ project/Authors";
import Detailed from "@/components/ project/Detailed";
import Advantages from "@/components/ project/Advantages";

export default {
  data() {
    return {
      project: null
    }
  },
  components: {
    Header,
    // Authors,
    Detailed,
    Advantages
  },
  mounted() {
    // this.axios.get('/product/byId/' + this.$route.params.id).then(res => {
    //   this.project = res.data
    // }).catch(error => {
    //   console.log(error)
    // });
  }
}
</script>

<style scoped>

</style>