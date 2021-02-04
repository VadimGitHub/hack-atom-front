<template>
  <div class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 2</h3>
              <p class="mt-1 text-sm text-gray-600">
                На этом шаге делается другаЯ хуита!"!
              </p>
            </div>
            <div class="md:col-span-2">
              <div class="px-4 sm:px-0 ml-10">
                <form @submit="validForm" class="md:col-span-2">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-12 sm:col-span-6">
                          <label class="block text-sm font-medium text-gray-700">Сфере деятельности: Scope</label>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="region" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Укажите область
                            деятельности:</label>
                          <select name="region" id="region" autocomplete="region" v-model="temp.stageId"
                                  class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                            <option v-for="(item,i) in stage" :key="i" :value="item.id">{{ item.value }}</option>
                          </select>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="barrier_entry" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Укажите входные
                            барьеры: </label>

                          <textarea name="barrier_entry" id="barrier_entry" autocomplete="barrier_entry"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-30 p-2"
                                    cols="30" rows="7"></textarea>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="output_analiz" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Укажите краткий
                            вывод по анализу рынка, возможности входа в него и размера рынка: </label>
                          <textarea name="output_analiz" id="output_analiz" autocomplete="output_analiz"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-30 p-2"
                                    cols="30" rows="7"></textarea>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="name" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Название
                            конкурента: </label>
                          <input type="text" name="name" id="name" autocomplete="name"
                                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
                        </div>


                        <div class="col-span-12 sm:col-span-6">
                          <label for="advantages" class="block text-sm font-medium text-gray-700">Кратко опишите
                            преимущества конкурента</label>
                          <textarea name="advantages" id="advantages" autocomplete="advantages"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-30 p-2"
                                    cols="30" rows="7"></textarea>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="problem_solved" class="block text-sm font-medium text-gray-700">Кратко опишите недостаки
                            конкурента:</label>
                          <textarea name="problem_solved" id="problem_solved" autocomplete="problem_solved"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-30 p-2"
                                    cols="30" rows="7"></textarea>
                        </div>
                        <div class="col-span-6" v-if="errorMess">
                          <h1 class="text-3xl text-red-600">{{ errorMess }}</h1>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit"
                              class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Сохранить
                      </button>

                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      },
      scope: [],
      stage: [],

    }
  },
  methods: {

    validForm(e) {
      e.preventDefault();
      if (this.temp.projectName && this.temp.projectTarget && this.temp.scopeId && this.temp.stageId) {
        console.log(JSON.stringify(this.temp))
        this.errorMess = ""
        axios.post('http://10.0.0.108:8080/project/create', this.temp);
      } else {
        this.errorMess = "Необходимо заполнить обязательные поля помеченные звездочкой"
      }
    }
  },
  async created() {
    try {
      this.stage = await axios.get('/stage_realization/find_all')
          .then(res => {
            return res.data;
          })
    } catch (e) {
      console.error(e)
    }
  }


}
</script>