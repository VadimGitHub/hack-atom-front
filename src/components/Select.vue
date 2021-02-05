<template>
  <div>
    <label :for="id" class="block text-sm text-gray-700">
      {{ label }} <span v-if="required" class="text-red-600">*</span>:
    </label>
    <select :name="id"
            :id="id"
            :autocomplete="id"
            class="mt-2 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
      <option v-for="(item,i) in list" :key="i" :value="item.id">{{
          item.value
        }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'required', 'list']
}
</script>