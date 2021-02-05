<template>
  <label :for="id" class="block text-sm text-gray-700">
    {{ label }} <span v-if="required" class="text-red-600">*</span>
  </label>
</template>

<script>
export default {
  props: ['id', 'label', 'required'],

}
</script>

<style scoped>

</style>