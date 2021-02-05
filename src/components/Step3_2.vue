<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 3.2</h3>
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
                            <Label :label="'Укажите полную себестоимость продукции:'" :id="'cost_prise'"
                                   :required="true"/>
                            <input type="number"
                                   name="cost_prise"
                                   id="cost_prise"
                                   autocomplete="cost_prise"
                                   placeholder="В рублях"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div class="mt-4">
                            <Label :label="'Укажите срок изготовления продукта в месяцах:'" :id="'time_production'"
                                   :required="true"/>
                            <input type="number" name="time_production" id="time_production"
                                   autocomplete="time_production"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div class="">
                            <h2 class="text-md text-black-600">Закупка оборудования</h2>
                          </div>
                          <div class=""
                               v-for="(item,i) in equipment" :key="i+'equipment'">
                            <div class="">
                              <Label :label="'Укажите какое оборудование необходимо'"/>
                              <input type="text" v-model="item.purchase_equipment"
                                     class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                            </div>
                            <div class="">
                              <Label :label="'Укажите стоимость'"/>
                              <input type="number" v-model="item.cost_equipment"
                                     class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                            </div>
                          </div>
                          <div class="">
                            <div style="cursor:pointer;" @click="addEquipment()"
                                 class="mt-5 inline-flex justify-center py-2 px-10 mr-10 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                              Добавить оборудование
                            </div>
                          </div>


                          <div>
                            <div class="">
                              <h1 class="text-md text-black-600">Закупка имущества</h1>
                            </div>
                            <div class=""
                                 v-for="(item,i) in property" :key="i+'property'">
                              <div class="col-span-12">
                                <Label :label="'Укажите какое оборудование необходимо'"/>
                                <input type="text" v-model="item.purchase_property"
                                       class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                              </div>
                              <div class="">
                                <Label :label="'Укажите стоимость'"/>
                                <input type="number" v-model="item.cost_property"
                                       class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                              </div>
                            </div>
                            <div class="">
                              <div style="cursor:pointer;" @click="addProperty()"
                                   class="mt-5 inline-flex justify-center py-2 px-10 mr-10 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Добавить имущество
                              </div>
                            </div>
                          </div>


                          <div>
                            <div class="">
                              <h1 class="text-md text-black-600">Закупка имущества</h1>
                            </div>
                            <div class=""
                                 v-for="(item,i) in property" :key="i+'property'">
                              <div class="">
                                <Label :label="'Укажите какое оборудование необходимо.'"/>
                                <input type="text" v-model="item.purchase_property"
                                       class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                              </div>
                              <div class="">
                                <Label :label="'Укажите стоимость'"/>
                                <input type="number" v-model="item.cost_property"
                                       class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                              </div>
                            </div>
                            <div class="">
                              <div style="cursor:pointer;" @click="addProperty()"
                                   class="mt-5 inline-flex justify-center py-2 px-10 mr-10 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Добавить имущество
                              </div>
                            </div>
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
  components:{
    Label
  },
  data() {
    return {
      errorMess: "",
      equipment: [{purchase_equipment: "", cost_equipment: ""}],
      property:[{purchase_property: "", cost_property: ""}],
      company:[{provider:"",name:""}]

    }
  },
  methods: {
    addEquipment() {
      this.equipment.push({purchase_equipment: "", cost_equipment: ""})
    },
    addProperty(){
      this.property.push({purchase_property: "", cost_property: ""})
    },
    addCompany(){
      this.company.push({provider:"",name:""})
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