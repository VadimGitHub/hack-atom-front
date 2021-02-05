<template>
  <div class="py-6 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Ads/>
      <div class="text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Росатом.Образование
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Образовательные программы для начинающих стартаперов
        </p>
      </div>
      <div class=""></div>
      <!-- component -->
      <!-- This is an example component -->
      <div>
        <div class="relative items-center justify-center">
          <!-- All Cards Container -->
          <div class="lg:flex items-center container mx-auto my-auto">
            <!-- Card 1 -->
            <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              <!-- Card Image -->
              <img src="https://images.pexels.com/photos/3688760/pexels-photo-3688760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""
                   class="overflow-auto">
              <!-- Card Content -->
              <div class="p-4">
                <h3 class="font-medium text-lg font-medium leading-6 text-gray-1 text-lg my-2 uppercase">Курс начинающих предпринимателей  </h3>
                <p class="text-justify">Как выбрать и проверить на жизнеспособность бизнес-идею, как выстроить сервис и продажи, а также наладить работу с клиентами. </p>
                <div class="mt-5">
                  <a href=""
                     class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Подробнее</a>
                </div>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              <!-- Card Image -->
              <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" class="overflow-hidden">
              <!-- Card Content -->
              <div class="p-4">
                <h3 class="font-medium text-gray-1 text-lg my-2 uppercase">Стратегия бизнеса и эффективное
                  управление</h3>
                <p class="text-justify">Что такое стратегическое видение бизнеса, эффективнно руководить и выстраивать систему управления.</p>
                <div class="mt-5">
                  <a href=""
                     class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Подробнее</a>
                </div>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              <!-- Card Image -->
              <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""
                   class="overflow-auto">
              <!-- Card Content -->
              <div class="p-4">
                <h3 class="font-medium text-gray-1 text-lg my-2 uppercase">Поддержка для бизнеса</h3>
                <p class="text-justify">В России есть программы, которые занимаются поддержкой малого и среднего бизнеса. Рассказываем о них подробно.</p>
                <div class="mt-5">
                  <a href=""
                     class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Подробнее </a>
                </div>
              </div>
            </div>
            <!-- Card 4 -->
            <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              <!-- Card Image -->
              <img src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""
                   class="overflow-auto">
              <!-- Card Content -->
              <div class="p-4">
                <h3 class="font-medium text-gray-1 text-lg my-2 uppercase">Управление проектами и продуктами</h3>
                <p class="text-justify">В рамках курса вы узнаете проектные и продуктовые методики управления (waterfall, scrum, kanban).</p>
                <div class="mt-5">
                  <a href=""
                     class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Подробнее </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Проекты для светлого будущего
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Среди наших проектов каждый может найти соответствующий его интересам
        </p>
      </div>
      <Projects :limit="6" :offset="0"/>
    </div>
  </div>
</template>

<script>
import Ads from "@/components/home/Ads";
import Projects from "@/components/home/Projects";

export default {
  components: {
    Ads,
    Projects
  },
}
</script>