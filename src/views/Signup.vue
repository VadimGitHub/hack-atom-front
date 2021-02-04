<template>
  <!-- Root element for center items -->
  <div class="flex flex-col bg-gray-100 mt-28">
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <!-- Auth Card -->
      <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">

        <!-- Card Title -->
        <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
          Регистрация
        </h2>

        <form class="mt-10" @submit="signup" method="POST">
          <!-- Login Input -->
          <label for="login" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Логин</label>
          <input id="login" v-model="login" type="text" name="login" placeholder="логин" autocomplete="company"
                 class="block w-full py-3 px-1 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>

          <!-- Email Input -->
          <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
          <input id="email" v-model="email" type="email" name="email" placeholder="e-mail" autocomplete="email"
                 class="block w-full py-3 px-1 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>

          <!-- Phone Input -->
          <label for="phone" class="block text-xs font-semibold text-gray-600 uppercase">Телефон</label>
          <input id="phone" v-model="phone" type="text" name="phone" placeholder="телефон" autocomplete="phone"
                 class="block w-full py-3 px-1 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>

          <!-- Company Select -->
          <label for="company" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Предприятие</label>
          <select id="company" name="company" autocomplete="company"
                  required
                  v-model="company"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option v-for="(item, i) in companyList" :key="i" :value="item.id">{{ item.value }}</option>
          </select>

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
            Зарегистрироваться
          </button>

          <!-- Another Auth Routes -->
          <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-right">
            <router-link to="/login" class="flex-2 underline">
              Есть аккаунт?
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: null,
      email: null,
      phone: null,
      company: null,
      password: null,
      companyList: [],
    };
  },
  methods: {
    signup(e) {
      e.preventDefault();

      if (!(this.login && this.email && this.phone && this.company && this.password)) {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'Ошибка',
          text: 'Необходимо заполнить все поля формы'
        });
        return;
      }

      this.axios.post('/auth/register', {
        login: this.login,
        email: this.email,
        phone: this.phone,
        companyId: this.company,
        password: this.password
      }).then(() => {
        window.location = '/'
      });
    },
  },
  mounted() {
    this.axios.get('/company/find_all').then((response) => {
      this.companyList = response.data
    });
  }
}
</script>