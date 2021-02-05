<template>
  <div class="max-w-2xl px-10 py-6 bg-white rounded-lg shadow-md">
    <div class="flex justify-between items-center">
      <span class="font-light text-gray-600">{{ project.createDate | formDate }}</span>
      <StagesMini :status="project.status"/>
    </div>
    <div class="mt-2">
      <router-link :to="(/project/) + project.id + '/' + project.status" role="menuitem"
                   class="text-xl text-gray-700 font-bold hover:underline block w-full truncate">
        {{ project.projectName }}
      </router-link>
      <p class="text-sm mt-2 text-gray-600 w-full truncate">
        {{ project.projectTarget }}
      </p>
    </div>
    <div class="flex justify-between flex-wrap items-center mt-4">
      <router-link :to="(/project/) + project.id + '/' + project.status" role="menuitem"
                   class="text-blue-500 hover:underline">
        посмотреть подробнее...
      </router-link>
      <div>
        <a href="#" class="flex items-center">
          <h4 class="text-gray-700 font-bold hover:underline">{{ project.userName }} <span class="text-sm text-opacity-50">({{project.userEmail}})</span></h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import StagesMini from '@/components/StagesMini'

export default {
  props: ['project'],

  components: {
    StagesMini
  },

  filters: {
    formDate: function (value) {
      return new Date(value * 1000).toLocaleDateString("ru-RU");
    },
  }
}
</script>

<style scoped>

</style>