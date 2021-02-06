<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BoxHeader :header="'Найди себе команду'"
                 :subheader="'Найди таких же увлеченных людей как ты и работайте вместе над общей идеей!'"/>
      <Ads/>
      <ButtonIndigo :title="'Посмотреть все объявления'" :to="'/projects'"/>

      <div class="mt-16"></div>

      <BoxHeader :header="'Проекты для светлого будущего'"
                 :subheader="'Среди наших проектов каждый может найти соответствующий его интересам'"/>
      <Projects :limit="6" :offset="0" :enableScroll="false" :url="'/project/cards'"/>
      <ButtonIndigo :title="'Посмотреть все проекты'" :to="'/projects'"/>
    </div>
  </div>
</template>

<script>
import Ads from "@/components/home/Ads";
import Projects from "@/components/home/Projects";
import BoxHeader from "@/components/BoxHeader";
import ButtonIndigo from "@/components/ButtonIndigo";

export default {
  components: {
    Ads,
    Projects,
    BoxHeader,
    ButtonIndigo
  },
}
</script>