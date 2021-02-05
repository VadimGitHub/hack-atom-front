<template>
  <div>
    <section class="text-gray-700">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Frequently Asked Question
          </h1>

          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            The most common questions about how our business works and what
            can do for you.
          </p>
        </div>
        <Stages />

        <div class="md:grid md:grid-cols-4 md:gap-6 mt-26">
          <div class="md:col-span-1">
            <Plank :title="'Набранный рейтинг'" :content="'238 очков'" />
          </div>
          <div class="md:col-span-1">
            <Plank :title="'Пользователей'" :content="'14 '" />
          </div>
          <div class="md:col-span-1">
            <Plank :title="'До конца конкурса'" :content="'14 дней'" />
          </div>
          <div class="md:col-span-1">
            <Plank :title="'Этап'" :content="'2'" />
          </div>
        </div>

        <div class="md:grid md:grid-cols-4 md:gap-6 mt-16">
          <div class="md:col-span-1">
            <Plank :title="'Набранный рейтинг'" :content="'238 очков'" />
          </div>
          <div class="md:col-span-1">
            <Plank :title="'Пользователей'" :content="'14 '" />
          </div>
          <div class="md:col-span-1">
            <Plank :title="'До конца конкурса'" :content="'14 дней'" />
          </div>
          <div class="md:col-span-1">
            <Plank :title="'Этап'" :content="'2'" />
          </div>
        </div>



<!--        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">-->
<!--          <div class="w-full lg:w-1/2 px-4 py-2">-->
<!--            <details class="mb-4">-->
<!--              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">-->
<!--                How Long is this site live?-->
<!--              </summary>-->

<!--              <span>-->
<!--                  Laboris qui labore cillum culpa in sunt quis sint veniam.-->
<!--                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis-->
<!--                  minim velit nostrud pariatur culpa magna in aute.-->
<!--                </span>-->
<!--            </details>-->
<!--            <details class="mb-4">-->
<!--              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">-->
<!--                Can I install/upload anything I want on there?-->
<!--              </summary>-->

<!--              <span>-->
<!--                  Laboris qui labore cillum culpa in sunt quis sint veniam.-->
<!--                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis-->
<!--                  minim velit nostrud pariatur culpa magna in aute.-->
<!--                </span>-->
<!--            </details>-->
<!--            <details class="mb-4">-->
<!--              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">-->
<!--                How can I migrate to another site?-->
<!--              </summary>-->

<!--              <span>-->
<!--                  Laboris qui labore cillum culpa in sunt quis sint veniam.-->
<!--                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis-->
<!--                  minim velit nostrud pariatur culpa magna in aute.-->
<!--                </span>-->
<!--            </details>-->
<!--          </div>-->
<!--          <div class="w-full lg:w-1/2 px-4 py-2">-->
<!--            <details class="mb-4">-->
<!--              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">-->
<!--                Can I change the domain you give me?-->
<!--              </summary>-->

<!--              <span class="px-4 py-2">-->
<!--                  Laboris qui labore cillum culpa in sunt quis sint veniam.-->
<!--                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis-->
<!--                  minim velit nostrud pariatur culpa magna in aute.-->
<!--                </span>-->
<!--            </details>-->
<!--            <details class="mb-4">-->
<!--              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">-->
<!--                How many sites I can create at once?-->
<!--              </summary>-->

<!--              <span class="px-4 py-2">-->
<!--                  Laboris qui labore cillum culpa in sunt quis sint veniam.-->
<!--                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis-->
<!--                  minim velit nostrud pariatur culpa magna in aute.-->
<!--                </span>-->
<!--            </details>-->
<!--            <details class="mb-4">-->
<!--              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">-->
<!--                How can I communicate with you?-->
<!--              </summary>-->

<!--              <span class="px-4 py-2">-->
<!--                  Laboris qui labore cillum culpa in sunt quis sint veniam.-->
<!--                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis-->
<!--                  minim velit nostrud pariatur culpa magna in aute.-->
<!--                </span>-->
<!--            </details>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </section>
  </div>
</template>

<script>
import Plank from "@/components/ project/Plank";
import Stages from "@/components/Stages";

export default {
  name: "Header",
  components: {
    Plank,
    Stages
  }
}
</script>

<style scoped>

</style>