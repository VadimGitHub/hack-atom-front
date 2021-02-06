<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between container mx-auto">
        <div class="w-full">
          <div class="flex items-center justify-between px-6">
            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Мои объявления</h1>
            <div class="flex align-center items-center align-middle">
              <router-link to="/ads" class="text-indigo-600 hover:text-indigo-500 whitespace-nowrap mr-5">
                все объявления
              </router-link>
              <ButtonIndigo class="whitespace-nowrap" :title="'Подать объявление'" :to="'/create-ad'"/>
            </div>
          </div>

          <Ads :limit="5" :offset="0" :enableScroll="true" :url="'/ads/find_user'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ads from "@/components/home/Ads";
import ButtonIndigo from "@/components/ButtonIndigo";

export default {
  props: ['title'],
  components: {
    Ads,
    ButtonIndigo
  }
}
</script>