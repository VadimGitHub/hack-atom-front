<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
                <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 1</h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Заполните основную информацию о проекте. Будьте внимательны, правильное наполнение очень важно для
                    продвижения проекта.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
                <form @submit="validForm">
                  <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
                    <div class="divide-y divide-gray-200">
                      <div class="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div class="flex flex-col">
                          <div>
                            <Label :label="'Название бизнес-инициативы/проекта:'" :id="'projectName'" :required="true"/>
                            <input type="text"
                                   name="projectName"
                                   id="projectName"
                                   autocomplete="projectName"
                                   v-model="temp.projectName"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div class="mt-4">
                            <Label :label="'Идея проекта:'" :id="'projectTarget'" :required="true"/>
                            <textarea name="projectTarget" id="projectTarget" autocomplete="projectTarget"
                                      v-model="temp.projectTarget"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Какие проблемы решает ваш проект:'" :id="'solvedProblem'"
                                   :required="false"/>
                            <textarea name="solvedProblem" id="solvedProblem" autocomplete="solvedProblem"
                                      v-model="temp.solvedProblem"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Какими преимуществами обладает ваш проект:'" :id="'advantages'"
                                   :required="false"/>
                            <textarea name="advantages" id="advantages" autocomplete="advantages"
                                      v-model="temp.advantages"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Укажите на какую отрасль экономики направлен ваш проект:'" :id="'scopeId'"
                                   :required="true"/>
                            <select id="scopeId" name="scopeId" autocomplete="scopeId"
                                    v-model="temp.scopeId"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item,i) in scope" :key="i" :value="item.id">{{ item.value }}</option>
                            </select>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Укажите на какой стадии находится ваш проект:'" :id="'stageId'"
                                   :required="true"/>
                            <select id="stageId" name="stageId" autocomplete="stageId"
                                    v-model="temp.stageId"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item,i) in stage" :key="i" :value="item.id">{{ item.value }}</option>
                            </select>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Необходимый срок для окончательной реализации вашего проекта (в месяцах):'"
                                   :id="'readyTime'" :required="false"/>
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
                  <div class="py-3 bg-gray-50 text-right" v-if="!temp.projectId">
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
import Label from "@/components/Label";

export default {
  components: {
    Label,
  },
  data() {
    return {
      errorMess: "",
      temp: {
        projectId: this.$route.params.id,
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
    async validForm(e) {
      e.preventDefault();
      if (this.temp.projectName && this.temp.projectTarget && this.temp.scopeId && this.temp.stageId) {
        this.errorMess = ""
        await this.axios.post('/project/create', this.temp).then((res) => {
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Успешно',
            text: 'Проект сохранен'
          });
          window.location = '/project/' + res.data + '/1'
        });
      } else {
        this.errorMess = "Необходимо заполнить обязательные поля помеченные звездочкой"
      }
    }
  },
  created() {
    if (this.temp.projectId) {
      this.axios.get('/project/byId/' + this.temp.projectId).then(res => {
        let project = res.data

        this.temp.projectName = project.projectName;
        this.temp.projectTarget = project.projectTarget;
        this.temp.solvedProblem = project.problemSolved;
        this.temp.advantages = project.advantages;
        this.temp.scopeId = project.scopeId;
        this.temp.stageId = project.stageId;
        this.temp.readyTime = project.readyTime;
      }).catch(error => {
        console.log(error)
      });
    }

    this.axios.get('/scope/find_all').then(res => {
      this.scope = res.data
    }).catch(error => {
      console.log(error)
    });

    this.axios.get('/stage_realization/find_all').then(res => {
      this.stage = res.data;
    }).catch(error => {
      console.log(error)
    });
  }
}
</script>