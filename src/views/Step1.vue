<template>
  <div>
    <section>

      <div class="flex flex-col h-screen bg-gray-100">
        <!-- Auth Card Container -->
        <div class="grid place-items-center mx-2 my-20 sm:my-auto">
          <!-- Auth Card -->
          <div class="w-11/12 p-12 sm:w-8/12 md:w-8/12 lg:w-8/12 2xl:w-10/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <h1 class="text-4xl p-5">Step 1</h1>
            <form @submit="validForm">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-12 sm:col-span-6">
                      <label for="projectName" class="block text-sm font-medium text-gray-700"><span
                          class="text-red-600">*</span>Краткое название
                        бизнес-инициативы/проекта: </label>
                      <input type="text" name="projectName" id="projectName" autocomplete="projectName" v-model="temp.projectName"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                    <div class="col-span-12 sm:col-span-6">
                      <label for="projectTarget" class="block text-sm font-medium text-gray-700"><span
                          class="text-red-600">*</span>Кратко описать идею
                        проекта:</label>
                      <textarea name="projectTarget" id="projectTarget" autocomplete="projectTarget" v-model="temp.projectTarget"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-30 p-2"
                                cols="30" rows="10"></textarea>
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="solvedProblem" class="block text-sm font-medium text-gray-700">Опишите, какие
                        проблемы
                        решает ваш проект : </label>
                      <textarea name="solvedProblem" id="solvedProblem" autocomplete="solvedProblem"
                                v-model="temp.solvedProblem"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-30 p-2"
                                cols="30" rows="10"></textarea>
                    </div>

                    <div class="col-span-6">
                      <label for="advantages" class="block text-sm font-medium text-gray-700">Кратко опишите, какими
                        преимуществами обладает ваш проект:</label>
                      <textarea name="advantages" id="advantages" autocomplete="advantages"
                                v-model="temp.advantages"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-30 p-2"
                      cols="30" rows="10"></textarea>
                       </div>

                    <div class="col-span-6">
                      <label for="scopeId" class="block text-sm font-medium text-gray-700"><span
                          class="text-red-600">*</span>Укажите на какую отрасль экономики направлен ваш проект:</label>
                      <select id="scopeId" name="scopeId" autocomplete="scopeId"
                              v-model="temp.scopeId"
                              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-8 p-2">
                        <option>Начало</option>
                        <option>Середина</option>
                        <option>Конец</option>
                      </select>
                    </div>


                    <div class="col-span-6 sm:col-span-3">
                      <label for="stageId" class="block text-sm font-medium text-gray-700"><span
                          class="text-red-600">*</span>Укажите на какой
                        стадии
                        находится ваш проект</label>
                      <select id="stageId" name="stageId" autocomplete="stageId"
                              v-model="temp.stageId"
                              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-8 p-2">
                        <option>Начало</option>
                        <option>Середина</option>
                        <option>Конец</option>
                      </select>
                    </div>

                    <div class="col-span-6">
                      <label for="readyTime" class="block text-sm font-medium text-gray-700">Укажите необходимый
                        срок для окончательной реализации вашего проекта (в месяцах):</label>
                      <input type="number" name="readyTime" id="readyTime" autocomplete="readyTime"
                             v-model="temp.readyTime"
                             placeholder="В месяцах"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-6" v-if="errorMess">
                      <h1 class="text-3xl text-red-600">{{ errorMess }}</h1>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                      class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Сохранить
                  </button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "step1",
  data() {
    return {
      errorMess: "",
      temp: {
        projectName: "",
        projectTarget: "",
        solvedProblem: "",
        advantages: "",
        scopeId: "",
        stageId: "",
        readyTime: "",
      }
    }
  },
  methods: {
    validForm(e) {
      e.preventDefault();
      if (this.temp.projectName && this.temp.projectTarget && this.temp.scopeId && this.temp.stageId) {
        console.log(JSON.stringify(this.temp))
        this.errorMess = ""
        axios.post('',this.temp);
      } else {
        this.errorMess = "Необходимо заполнить обязательные поля помеченные звездочкой"
      }
    }
  },


}
</script>