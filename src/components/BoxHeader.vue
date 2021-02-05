<template>
  <div class="text-center">
    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      {{ header }}
    </p>
    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      {{ subheader }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['header', 'subheader']
}
</script>