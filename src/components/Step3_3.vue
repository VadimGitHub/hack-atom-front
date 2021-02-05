<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 3.3</h3>
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
                            <Label :label="'Укажите организационно-правовую форму:'" :id="'legal_form'"
                                   :required="true"/>
                            <select name="legal_form"
                                    id="legal_form"
                                    autocomplete="legal_form"
                                    v-model="temp.legal_form"
                                    class="mt-2 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item, i) in usingProducts" :key="i" :value="item.id">{{
                                  item.value
                                }}
                              </option>
                            </select>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Укажите необходимое количество персонала для реализации проекта:'"
                                   :id="'personal'"
                                   :required="true"/>
                            <select name="personal"
                                    id="personal"
                                    autocomplete="personal"
                                    v-model="temp.personal"
                                    class="mt-2 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item, i) in usingProducts" :key="i" :value="item.id">{{
                                  item.value
                                }}
                              </option>
                            </select>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Укажите структуру управления компанией:'" :id="'management'"
                                   :required="true"/>
                            <select name="management"
                                    id="management"
                                    autocomplete="management"
                                    v-model="temp.management"
                                    class="mt-2 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item, i) in usingProducts" :key="i" :value="item.id">{{
                                  item.value
                                }}
                              </option>
                            </select>
                          </div>

                          <div class="">
                            <Label :label="'Укажите размер управленческих расходов:'" :id="'fond_managerial'"
                                   :required="true"/>
                            <input type="number"
                                   name="fond_managerial"
                                   id="fond_managerial"
                                   autocomplete="fond_managerial"
                                   v-model="temp.fond_managerial"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
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
import axios from "axios";
import Label from "@/components/Label";

export default {
  name: "step1",
  components: {
    Label
  },
  data() {
    return {
      temp: {},
      errorMess: "",
      usingProducts:[]

    }
  },
  methods: {
    addEquipment() {
      this.equipment.push({purchase_equipment: "", cost_equipment: ""})
    },
    addProperty() {
      this.property.push({purchase_property: "", cost_property: ""})
    },
    addCompany() {
      this.company.push({provider: "", name: ""})
    },
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