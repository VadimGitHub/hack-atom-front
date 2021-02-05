<template>
  <div class="text-center">
    <router-link :to="to"
                 class="inline-flex justify-center py-2 px-10 mr-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['to', 'title']
}
</script>