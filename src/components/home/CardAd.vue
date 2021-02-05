<template>
  <div>
    <div class="bg-white w-full  p-2 rounded-xl shadow border">
      <div class="flex items-center">
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
      <div class="text-gray-400 text-xs text-right">
        <a :href="('mailto:') + email">{{ email }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'email']
}
</script>

<style scoped>

</style>