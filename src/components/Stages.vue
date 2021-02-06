<template>
  <div class="w-full py-6">
    <div class="flex">
      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="w-10 h-10 bg-purple-500 border-2 mx-auto border-2 rounded-full text-lg text-white flex items-center"></div>
        </div>
        <div class="text-xs text-center md:text-base">
          <router-link :to="`/step1/${id}`" class="text-indigo-600 hover:text-indigo-500">
            I. Резюме
          </router-link>
        </div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
            <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
              <div :class="[status >= 1 ? 'w-full' : '', 'w-0 bg-green-300 py-1 rounded']"></div>
            </div>
          </div>

          <div :class="[status >= 2 ? 'bg-indigo-500' : 'bg-white', 'w-10 h-10 border-2 mx-auto border-2 rounded-full text-lg text-white flex items-center']">
            <span class="text-center text-gray-600 w-full"></span>
          </div>
        </div>
        <div class="text-xs text-center md:text-base">
          <router-link v-if="status >= 1" :to="`/step2/${id}`" class="text-indigo-600 hover:text-indigo-500">
            II. Описание продукта и<br>анализ рынка
          </router-link>
          <span v-else>II. Описание продукта и<br>анализ рынка</span>
        </div>

      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
            <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
              <div :class="[status >= 2 ? 'w-full' : '', 'w-0 bg-green-300 py-1 rounded']"></div>
            </div>
          </div>

          <div :class="[status >= 3 ? 'bg-blue-500' : 'bg-white', 'w-10 h-10 border-2 mx-auto border-2 rounded-full text-lg text-white flex items-center']">
            <span class="text-center text-gray-600 w-full"></span>
          </div>
        </div>
        <div class="text-xs text-center md:text-base">
          <router-link v-if="status >= 2" :to="`/step3/${id}`" class="text-indigo-600 hover:text-indigo-500">
            III. Маркетинг, производство и управление
          </router-link>
          <span v-else>III. Маркетинг, производство и управление</span>
        </div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
            <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
              <div :class="[status >= 3 ? 'w-full' : '', 'w-0 bg-green-300 py-1 rounded']"></div>
            </div>
          </div>

          <div :class="[status >= 4 ? 'bg-green-500' : 'bg-white', 'w-10 h-10 border-2 mx-auto border-2 rounded-full text-lg text-white flex items-center']">
            <span class="text-center text-gray-600 w-full"></span>
          </div>
        </div>
        <div class="text-xs text-center md:text-base">
          <a v-if="status >= 3" href="" class="text-indigo-600 hover:text-indigo-500">IV. Финансы и риски</a>
          <span v-else>IV. Финансы и риски</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'status'],
}
</script>