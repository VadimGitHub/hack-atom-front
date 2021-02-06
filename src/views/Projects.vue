<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between container mx-auto">
        <div class="w-full">
          <div class="flex items-center justify-between px-6">
            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Список проектов</h1>
            <div class="flex align-center items-center align-middle">
              <select id="stage" name="stage" autocomplete="stage"
                      v-model="filterStage"
                      class="mr-4 mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                <option v-for="(date, i) in stage" :key="i" :value="date">{{ date }}</option>
              </select>

              <select id="date" name="date" autocomplete="date"
                      v-model="filterDate"
                      class="mr-4 mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                <option v-for="(date, i) in filtersList" :key="i" :value="date">{{ date }}</option>
              </select>

              <a href="/projects">сбросить</a>
            </div>
          </div>

          <Projects :limit="5" :offset="0" :enableScroll="true" :url="'/project/cards'"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "@/components/home/Projects";

export default {
  data() {
    return {
      filterStage: null,
      filterDate: null,
      stage: {
        1: 'Этап 1',
        2: 'Этап 2',
        3: 'Этап 3',
        4: 'Этап 4',
      },
      filtersList: {
        1: 'Последние',
        2: 'За текущую неделю',
      }
    }
  },
  components: {
    Projects
  }
}
</script>