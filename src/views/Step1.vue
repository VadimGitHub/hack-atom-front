<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 1</h3>
              <p class="mt-1 text-sm text-gray-600">
                Заполните основную информацию о проекте. Будьте внимательны, правильное наполнение очень важно для
                продвижения проекта.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
                <form @submit="validForm">
                  <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
                    <div class="divide-y divide-gray-200">
                      <div class="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div class="flex flex-col">
                          <div>
                            <label for="projectName" class="block text-sm text-gray-700">
                              Название бизнес-инициативы/проекта:&nbsp;<span class="text-red-600">*</span>
                            </label>
                            <input type="text" name="projectName" id="projectName" autocomplete="projectName"
                                   v-model="temp.projectName"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div class="mt-4">
                            <label for="projectTarget" class="block text-sm text-gray-700">
                              Идея проекта:&nbsp;<span class="text-red-600">*</span>
                            </label>
                            <textarea name="projectTarget" id="projectTarget" autocomplete="projectTarget"
                                      v-model="temp.projectTarget"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <label for="solvedProblem" class="block text-sm text-gray-700">
                              Какие проблемы решает ваш проект: </label>
                            <textarea name="solvedProblem" id="solvedProblem" autocomplete="solvedProblem"
                                      v-model="temp.solvedProblem"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <label for="advantages" class="block text-sm text-gray-700">
                              Какими преимуществами обладает ваш проект:</label>
                            <textarea name="advantages" id="advantages" autocomplete="advantages"
                                      v-model="temp.advantages"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <label for="scopeId" class="block text-sm text-gray-700">
                              Укажите на какую отрасль экономики направлен ваш проект:&nbsp;<span class="text-red-600">*</span>
                            </label>
                            <select id="scopeId" name="scopeId" autocomplete="scopeId"
                                    v-model="temp.scopeId"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item,i) in scope" :key="i" :value="item.id">{{ item.value }}</option>
                            </select>
                          </div>

                          <div class="mt-4">
                            <label for="stageId" class="block text-sm text-gray-700">
                              Укажите на какой стадии находится ваш проект:&nbsp;<span class="text-red-600">*</span></label>
                            <select id="stageId" name="stageId" autocomplete="stageId"
                                    v-model="temp.stageId"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item,i) in stage" :key="i" :value="item.id">{{ item.value }}</option>
                            </select>
                          </div>

                          <div class="mt-4">
                            <label for="readyTime" class="block text-sm text-gray-700">
                              Необходимый срок для окончательной реализации вашего проекта (в месяцах):
                            </label>
                            <input type="number" name="readyTime" id="readyTime" autocomplete="readyTime"
                                   v-model="temp.readyTime"
                                   placeholder="В месяцах"
                                   class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                          </div>

                          <div class="col-span-6 mt-6" v-if="errorMess">
                            <h1 class="text-sm text-red-600">{{ errorMess }}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 bg-gray-50 text-right">
                    <button
                        class="inline-flex justify-center py-2 px-10 mr-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Сохранить
                    </button>
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
export default {
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
        this.errorMess = ""
        this.axios.post('/project/create', this.temp);
      } else {
        this.errorMess = "Необходимо заполнить обязательные поля помеченные звездочкой"
      }
    }
  },
  async created() {
    try {
      this.scope = await this.axios.get('/scope/find_all')
          .then(res => {
            return res.data;
          })
    } catch (e) {
      console.error(e)
    }
    try {
      this.stage = await this.axios.get('/stage_realization/find_all')
          .then(res => {
            return res.data;
          })
    } catch (e) {
      console.error(e)
    }
  }
}
</script>