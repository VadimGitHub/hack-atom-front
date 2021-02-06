<template>
  <div class="py-12 border-blue-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
            <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Профиль</h3>
              <p class="mt-1 text-sm text-gray-600">
                Здесь вы можете изменить основную информацию профиля
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
            <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
              <div class="divide-y divide-gray-200">
                <div class="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="flex flex-col">
                    <label for="login" class="leading-loose">Логин</label>
                    <input id="login" v-model="login" type="text" name="login" placeholder="логин"
                           autocomplete="company"
                           class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           required/>

                    <label for="email" class="leading-loose pt-3">E-mail</label>
                    <input id="email" v-model="email" type="email" name="email" placeholder="e-mail"
                           autocomplete="email"
                           class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           required/>

                    <label for="phone" class="leading-loose pt-3">Телефон</label>
                    <input id="phone" v-model="phone" type="text" name="phone" placeholder="телефон"
                           autocomplete="phone"
                           class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           required/>

                    <label for="company" class="leading-loose pt-3">Предприятие</label>
                    <select id="company" name="company" autocomplete="company"
                            required
                            v-model="company"
                            class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                      <option v-for="(item, i) in companyList" :key="i" :value="item.id">{{ item.value }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Сохранить
              </button>
            </div>
          </div>
        </div>
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
      email: null,
      phone: null,
      company: null,
      companyList: [],
      currentUser: authenticationService.currentUserValue,
    };
  },
  methods: {
    signup(e) {
      e.preventDefault();

      if (!(this.login && this.email && this.phone && this.company)) {
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
      }).then(() => {
        window.location = '/'
      });
    },
  },
  mounted() {
    this.axios.get('/company/find_all').then((response) => {
      this.companyList = response.data
    });

    let currentUser = authenticationService.currentUserValue;
    this.login = currentUser.login
    this.email = currentUser.email
    this.phone = currentUser.phone
    this.company = 2
  }
}
</script>