<template>
  <div class="flex flex-col mt-12">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <!-- Auth Card -->
      <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">

        <!-- Card Title -->
        <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
          Авторизация
        </h2>

        <form class="mt-10" @submit="signIn" method="POST">
          <!-- Login Input -->
          <label for="login" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Логин</label>
          <input id="login" v-model="login" type="text" name="login" placeholder="логин" autocomplete="company"
                 class="block w-full py-3 px-1 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>

          <!-- Password Input -->
          <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Пароль</label>
          <input id="password" v-model="password" type="password" name="password" placeholder="пароль"
                 autocomplete="current-password"
                 class="block w-full py-3 px-1 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>

          <button type="submit"
                  class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
            Войти
          </button>

          <!-- Another Auth Routes -->
          <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-right">
            <router-link to="/signup" class="flex-2 underline">
              Создать аккаунт
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {authenticationService} from '@/_services/authentication.service';

export default {
  data() {
    return {
      login: null,
      password: null,
    };
  },
  methods: {
    signIn(e) {
      e.preventDefault();

      if (!(this.login && this.password)) {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Ошибка',
          text: 'Необходимо заполнить все поля формы'
        });
        return;
      }

      authenticationService.login(this.login, this.password)
    },
  },
}
</script>