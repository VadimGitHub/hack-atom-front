<template>
  <div class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 3</h3>
              <p class="mt-1 text-sm text-gray-600">
                На этом шаге делается йобана золупа!!!!
                На этом шаге делается йобана золупа!!!!
                На этом шаге делается йобана золупа!!!!
              </p>
            </div>
            <div class="md:col-span-2">
              <div class="px-4 sm:px-0 ml-10">
                <form @submit="validForm" class="md:col-span-2">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">

                        <div class="col-span-12 sm:col-span-6">
                          <label for="cost_prise" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Укажите полную себестоимость продукции:</label>
                          <input type="number" name="cost_prise" id="cost_prise" autocomplete="cost_prise"
                                 placeholder="В рублях"
                                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
                        </div>
                        <div class="col-span-12 sm:col-span-6">
                          <label for="time_production" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Укажите срок изготовления продукта в месяцах:</label>
                          <input type="number" name="time_production" id="time_production"
                                 autocomplete="time_production"
                                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
                        </div>
                        <div class="col-span-6">
                          <h1 class="text-md text-black-600">Закупка оборудования</h1>
                        </div>
                        <div class="col-span-6"
                             v-for="(item,i) in equipment" :key="i+'equipment'">
                          <div class="col-span-12">
                            <label class="block text-sm font-medium text-gray-700">Укажите какое оборудование необходимо.</label>
                            <input type="text" v-model="item.purchase_equipment"
                                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
                          </div>
                          <div class="col-span-12">
                            <label class="block text-sm font-medium text-gray-700">Укажите стоимость</label>
                            <input type="number" v-model="item.cost_equipment"
                                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
                          </div>
                        </div>
                        <div class="col-span-6">
                          <div style="cursor:pointer;" @click="addEquipment()"
                               class="inline-flex justify-center py-2 px-10 mr-10 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            Добавить оборудование
                          </div>
                        </div>



                        <div class="col-span-6">
                          <h1 class="text-md text-black-600">Закупка имущества</h1>
                        </div>
                        <div class="col-span-6"
                             v-for="(item,i) in property" :key="i+'property'">
                          <div class="col-span-12">
                            <label class="block text-sm font-medium text-gray-700">Укажите какое оборудование необходимо.</label>
                            <input type="text" v-model="item.purchase_property"
                                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
                          </div>
                          <div class="col-span-12">
                            <label class="block text-sm font-medium text-gray-700">Укажите стоимость</label>
                            <input type="number" v-model="item.cost_property"
                                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
                          </div>
                        </div>
                        <div class="col-span-6">
                          <div style="cursor:pointer;" @click="addProperty()"
                               class="inline-flex justify-center py-2 px-10 mr-10 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            Добавить имущество
                          </div>
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
      equipment: [{purchase_equipment: "", cost_equipment: ""}],
      property:[{purchase_property: "", cost_property: ""}],

    }
  },
  methods: {
    addEquipment() {
      console.log("pes")
      this.equipment.push({purchase_equipment: "", cost_equipment: ""})
    },
    addProperty(){
      this.property.push({purchase_property: "", cost_property: ""})
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