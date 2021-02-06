<template>
  <div class="my-4 bg-white w-full flex items-center p-2 rounded-xl shadow border">
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">
        {{ title }}
      </div>
      <div class="text-sm text-gray-500">
        {{ content }}
      </div>
    </div>
    <div class="p-2">
      <span class="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plank",
  props: ['title', 'content']
}
</script>

<style scoped>

</style>