<template>
  <div class="py-6 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Ads/>
      <div class="mt-16"></div>
      <Projects/>
    </div>
  </div>
</template>

<script>
import Ads from "@/components/home/Ads";
import Projects from "@/components/home/Projects";

export default {
  components: {
    Ads,
    Projects
  },
}
</script>