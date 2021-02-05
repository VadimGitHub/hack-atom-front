<template>
  <div class="w-1/4">
    <div class="flex">
      <div class="w-1/4">
        <div class="relative mb-2">
          <div class="border-2 w-5 h-5 mx-auto bg-purple-500 rounded-full text-lg text-white flex items-center">
          <span class="text-center text-white w-full">
            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12"
                 height="12">
            </svg>
          </span>
          </div>
        </div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div
              :class="[status >= 2 ? 'bg-indigo-500' : 'bg-white', 'w-5 h-5 border-2 mx-auto border-2 rounded-full text-lg text-white flex items-center']">
          <span class="text-center text-white w-full">
            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12"
                 height="12">
            </svg>
          </span>
          </div>
        </div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div
              :class="[status >= 3 ? 'bg-blue-500' : 'bg-white', 'w-5 h-5 border-2 mx-auto border-2 rounded-full text-lg text-white flex items-center']">
          <span class="text-center text-gray-600 w-full">
            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12"
                 height="12">
            </svg>
          </span>
          </div>
        </div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div
              :class="[status >= 4 ? 'bg-green-500' : 'bg-white', 'w-5 h-5 border-2 mx-auto rounded-full text-lg text-white flex items-center']">
          <span class="text-center text-gray-600 w-full">
            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12"
                 height="12">
            </svg>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['status']
}
</script>

<style scoped>

</style>