<template>
  <div>
    <label :for="id" class="block text-sm text-gray-700">
      {{ label }} <span v-if="required" class="text-red-600">*</span>:
    </label>
    <textarea :name="id" :id="id"
              :autocomplete="id"
              class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              cols="30" rows="4"></textarea>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'required']
}
</script>