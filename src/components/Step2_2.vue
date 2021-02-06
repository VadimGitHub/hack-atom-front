<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
                <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 2.2</h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Этап заполенение информации о продукте
                  </p>
                </div>
              </div>
            </div>
            <div class="md:col-span-2">
              <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
                <form @submit="validForm">
                  <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
                    <div class="divide-y divide-gray-200">
                      <div class="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div class="flex flex-col">
                          <div>
                            <Label :label="'Укажите область деятельности:'" :id="'region'" :required="true"/>
                            <select name="regionId"
                                    id="regionId"
                                    autocomplete="regionId"
                                    v-model="temp.regionId"
                                    class="mt-2 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item,i) in region" :key="i" :value="item.id">{{ item.value }}</option>
                            </select>
                          </div>


                          <div class="mt-4">
                            <Label :label="'Укажите входные барьеры:'" :id="'barrierEntry'" :required="true"/>
                            <textarea name="barrierEntry"
                                      id="barrierEntry"
                                      autocomplete="barrierEntry"
                                      v-model="temp.barrierEntry"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30"
                                      rows="4">
                            </textarea>
                          </div>

                          <div class="mt-4">
                            <Label
                                :label="'Укажите краткий вывод по анализу рынка, возможности входа в него и размера рынка:'"
                                :id="'outputAnaliz'" :required="true"/>
                            <textarea name="outputAnaliz"
                                      id="outputAnaliz"
                                      autocomplete="outputAnaliz"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30"
                                      rows="4"
                            v-model="temp.outputAnaliz">
                          </textarea>
                          </div>

                          <div class="col-span-6">
                            <h1 class="text-md text-black-600">Список конкурентов</h1>
                          </div>

                          <div class="mt-4">
                            <div class=" border-b-2 pb-4 border-gray-100 mt-4"
                                v-for="(item,i) in temp.competitors" :key="i+'property'">
                              <div class="mt-4">
                                <Label :label="'Название конкурента:'" :id="'name'" :required="true"/>
                                <input type="text"
                                       name="name"
                                       id="name"
                                       autocomplete="name"
                                       v-model="item.competitorName"
                                       class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                              </div>


                              <div class="mt-4">
                                <Label :label="'Кратко опишите преимущества конкурента:'" :id="'advantages'"/>
                                <textarea name="advantages"
                                          id="advantages"
                                          autocomplete="advantages"
                                          class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                          cols="30"
                                          rows="4"
                                          v-model="item.advantages">
                          </textarea>
                              </div>
                              <div class="mt-4">
                                <Label :label="'Кратко недостаки конкурента:'" :id="'advantages'"/>
                                <textarea name="problem_solved"
                                          id="problem_solved"
                                          autocomplete="problem_solved"
                                          class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                          cols="30"
                                          rows="4"
                                          v-model="item.problemSolved">
                          </textarea>
                              </div>
                            </div>

                            <div class="mt-5">
                              <div style="cursor:pointer;" @click="addCompetitors()"
                                   class="inline-flex justify-center py-2 px-10 mr-10 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Добавить конкурента
                              </div>
                            </div>
                          </div>


                          <div class="mt-4">
                            <Label style="color:#fff;-moz-user-select: none;-khtml-user-select: none;user-select: none;"
                                   :label="'Особенности продукта (наличие авторских прав, гостов, стандартов, сертификатов, экологичность продукта и др.):'"
                                   :id="'additionalInformation'" :required="false"/>

                          </div>


                          <div class="col-span-6 mt-6" v-if="errorMess">
                            <h1 class="text-sm text-red-600">{{ errorMess }}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="showBtn" class="py-3 bg-gray-50 text-right">
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
import axios from "axios";
import Label from "@/components/Label";

export default {
  name: "step1",
  components: {
    Label,
  },
  data() {
    return {
      errorMess: "",
      temp: {
        projectId:this.$route.params.id ,
        regionId: "",
        barrierEntry: "",
        outputAnaliz: "",
        competitors: [{
          competitorName: "",
          advantages: "",
          problemSolved: "",
        }]
      },
      showBtn:true,
      region: [],


    }
  },
  methods: {
    addCompetitors() {
      this.temp.competitors.push({
        competitorName: "",
        advantages: "",
        problemSolved: "",
      })
    },
    validForm(e) {
      e.preventDefault();


      if (this.temp.regionId && this.temp.barrierEntry && this.temp.outputAnaliz ) {
        console.log(JSON.stringify(this.temp))
        this.errorMess = ""
        axios.post('/market/create', this.temp).then((res) => {
          console.log(res)
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Успешно',
            text: 'Проект сохранен'
          });
        })
      } else {
        console.log(JSON.stringify(this.temp))
        this.errorMess = "Необходимо заполнить обязательные поля помеченные звездочкой"
      }
    }
  },
  async created() {
    if (this.temp.projectId) {
      this.axios.get('market/byProject/' + this.temp.projectId).then(res => {
        console.log(res.data)
        let project = res.data
        if (project)
          this.showBtn=false
        this.temp.regionId = project.regionId;
        this.temp.barrierEntry = project.barrierEntry;
        this.temp.outputAnaliz = project.outputAnaliz;
        this.temp.competitors = project.competitors;
      }).catch(error => {
        console.log(error)
      });
    }
    try {
      this.region = await axios.get('/region/find_all')
          .then(res => {
            return res.data;
          })
    } catch (e) {
      console.error(e)
    }
  }


}
</script>