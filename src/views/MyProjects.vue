<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between container mx-auto">
        <div class="w-full">
          <div class="flex items-center justify-between px-6">
            <div class="flex">
              <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Мои проекты</h1>
            </div>
            <div class="flex align-center items-center align-middle">
              <router-link to="/projects" class="text-indigo-600 hover:text-indigo-500 whitespace-nowrap mr-5">
                все проекты
              </router-link>
              <ButtonIndigo class="whitespace-nowrap" :title="'Создать проект'" :to="'/step1'"/>
            </div>
          </div>
          <Projects :limit="5" :offset="0" :enableScroll="true" :url="'/project/for_user'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "@/components/home/Projects";
import ButtonIndigo from "@/components/ButtonIndigo";

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
    Projects,
    ButtonIndigo
  }
}
</script>