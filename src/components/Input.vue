<template>
  <input :type="type"
         :name="id"
         :id="id"
         :autocomplete="id"
         class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
</template>

<script>
export default {
  props: ['id', 'type'],
}
</script>