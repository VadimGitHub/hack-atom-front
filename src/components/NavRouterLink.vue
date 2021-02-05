<template>
  <router-link :to="to" :class="classes">
    {{ title }}
  </router-link>
</template>

<script>
export default {
  name: "NavRouterLink",
  props: ['to', 'title', 'active'],
  computed: {
    classes: function () {
      if (this.active) {
        return 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium';
      } else {
        return 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
      }
    }
  }
}
</script>