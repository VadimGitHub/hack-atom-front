<template>
  <div class="w-96 m-auto flex">
    <div
        class="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div class="col-span-3 row-span-4">
        <a href="#">
          <img src="https://picsum.photos/640/400/?random" alt="Placeholder" class="object-cover h-48 w-full"/>
        </a>
      </div>

      <div class="col-span-3 text-center row-span-1">
        <header class="flex items-center justify-between leading-tight p-2 text-center">
          <h3 class="w-full text-center text-lg overflow-hidden">
            <a class="block truncate no-underline hover:underline text-black" href="#">
              {{ title }}
            </a>
          </h3>
        </header>
        <body class="leading-tight p-2">
        <p class="text-sm text-gray-500">{{ content }}</p>
        <ButtonIndigo class="m-3" :title="'Записаться на курс'" to="#"/>
        </body>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIndigo from "@/components/ButtonIndigo";

export default {
  props: ['title', 'content'],
  components: {
    ButtonIndigo
  }
}
</script>