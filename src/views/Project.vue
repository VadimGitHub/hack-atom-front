<template>
  <div class="py-6 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <Header :project="project" />
      <Detailed :project="project" />
      <Advantages :project="project" />

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
    let url = '/project/byId2/' + this.$route.params.id
    if (this.$route.params.stage === 1) {
      url = '/project/byId1/' + this.$route.params.id
    }

    this.axios.get(url).then(res => {
      this.project = res.data
    }).catch(error => {
      console.log(error)
    });
  }
}
</script>

<style scoped>

</style>