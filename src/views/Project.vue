<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header :project="project" />
      <Detailed :project="project" />
    </div>
  </div>
</template>

<script>

import Header from "@/components/project/Header";
import Detailed from "@/components/project/Detailed";

export default {
  data() {
    return {
      project: {}
    }
  },
  components: {
    Header,
    Detailed,
  },
  mounted() {
    let url = '/project/byId2/' + this.$route.params.id
    if (Number(this.$route.params.stage) === 1) {
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