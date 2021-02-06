<template>
  <div class="py-12 border-blue-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
            <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Профиль</h3>
              <p class="mt-1 text-sm text-gray-600">
                Основная информация вашего профиля
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
          </div>
        </div>
      </div>

      <div class="md:grid md:grid-cols-3 md:gap-6 mt-12">
        <div class="md:col-span-1">
          <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
            <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Команда</h3>
              <p class="mt-1 text-sm text-gray-600">
                Список откликнувшихся на ваши объявления
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                <tr>
                  <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Пользователь
                  </th>
                  <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Телефон
                  </th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(ad, i) in ads" :key="i">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ ad.userName }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="text-sm text-gray-900">
                      {{ ad.email }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="text-sm text-gray-900">
                      {{ ad.userPhone }}
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
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

      ads: []
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

    this.axios.get('/response_ads/find_all').then((response) => {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      this.ads = response.data.filter(onlyUnique);
    });

    let currentUser = authenticationService.currentUserValue;
    this.login = currentUser.login
    this.email = currentUser.email
    this.phone = currentUser.phone
    this.company = 2
  }
}
</script>