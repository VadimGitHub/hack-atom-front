<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">DDT</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Проекты для светлого будущего
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>

      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="w-full">

            <div class="md:grid md:grid-cols-2 md:gap-6">
              <Span1 v-for="(projects, i) in projects" :key="i">
                <Project/>
              </Span1>
            </div>

            <div class="mt-8">
              <div class="flex justify-center">
                <a href="#" class="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed">
                  Предыдущая
                </a>
                <a href="#"
                   class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                  1
                </a>
                <a href="#"
                   class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                  2
                </a>
                <a href="#"
                   class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                  3
                </a>
                <a href="#"
                   class="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                  Следующая
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project'
import Span1 from '@/components/Span1'

export default {
  data() {
    return {
      projects: [
          1, 2, 3, 4, 5
      ],
    };
  },
  components: {
    Project,
    Span1
  }
}
</script>

<style scoped>

</style>