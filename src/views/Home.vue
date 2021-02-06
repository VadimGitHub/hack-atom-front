<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BoxHeader :header="'Найди себе команду'"
                 :subheader="'Найди таких же увлеченных людей как ты и работайте вместе над общей идеей!'"/>
      <Ads :limit="6" :offset="0" :url="'/ads/find_all'"/>
      <ButtonIndigo :title="'Перейти на страницу объявлений'" :to="'/ads'"/>

      <div class="mt-16"></div>
      <Education/>
      <div class="mt-16"></div>

      <BoxHeader :header="'Проекты для светлого будущего'"
                 :subheader="'Среди наших проектов каждый может найти соответствующий своим интересам'"/>
      <Projects :limit="6" :offset="0" :enableScroll="false" :url="'/project/cards'"/>
      <ButtonIndigo :title="'Перейти на страницу проектов'" :to="'/projects'"/>
    </div>
  </div>
</template>

<script>
import Ads from "@/components/home/Ads";
import Projects from "@/components/home/Projects";
import Education from "@/components/Education";
import BoxHeader from "@/components/BoxHeader";
import ButtonIndigo from "@/components/ButtonIndigo";

export default {
  components: {
    Ads,
    Projects,
    Education,
    BoxHeader,
    ButtonIndigo
  },
}
</script>