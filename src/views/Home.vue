<template>
  <div class="py-6 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Ads/>
      <ButtonIndigo :title="'Посмотреть все объявления'" :to="'/projects'"/>
      <div class="mt-16"></div>

      <div class="text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Проекты для светлого будущего
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Среди наших проектов каждый может найти соответствующий его интересам
        </p>
      </div>
      <Projects :limit="6" :offset="0" :enableScroll="false" />
      <ButtonIndigo :title="'Посмотреть все проекты'" :to="'/projects'"/>
    </div>
  </div>
</template>

<script>
import Ads from "@/components/home/Ads";
import Projects from "@/components/home/Projects";
import ButtonIndigo from "@/components/ButtonIndigo";

export default {
  components: {
    Ads,
    Projects,
    ButtonIndigo
  },
}
</script>