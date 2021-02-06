<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 3.1</h3>
              <p class="mt-1 text-sm text-gray-600">
                Этап заполенение информации о продукте
              </p>
            </div>
            <div class="md:col-span-2">
              <div class="shadow sm:rounded-md sm:overflow-hidden bg-gray-100 flex flex-col justify-center">
                <form @submit="validForm">
                  <div class="relative px-4 bg-white mx-8 md:mx-0 sm:p-6 mx-auto">
                    <div class="divide-y divide-gray-200">
                      <div class="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div class="flex flex-col">
                          <div>
                            <Label :label="'Укажите стоимость готового продукта:'" :id="'cost_product'"
                                   :required="true"/>
                            <input type="text"
                                   name="cost_product"
                                   id="cost_product"
                                   autocomplete="cost_product"
                                   placeholder="В рублях"
                                   v-model="temp.marketingProductCost"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>


                          <div class="mt-4">
                            <Label :label="'Укажите среднее количество продаж продукта в месяц:'" :id="'volume_sales'"
                                   :required="true"/>
                            <input type="text" name="volume_sales" id="volume_sales" autocomplete="volume_sales"
                                   placeholder="В рублях"
                                   v-model="temp.volumeSales"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div class="mt-4">
                            <Label :label="'Укажите какие виды продаж будут использоваться:'" :id="'sales_channel'"
                                   :required="false"/>
                            <select name="sales_channel" id="sales_channel" autocomplete="sales_channel"
                                    v-model="temp.typeSales"
                                    multiple
                                    max="4"
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-30">
                              <option v-for="(item,i) in typeSales" :key="i" :value="item.id">{{ item.value }}</option>
                            </select>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Способы рекламы:'" :id="'ways_advertising'"
                                   :required="true"/>
                            <select name="ways_advertising" id="ways_advertising" autocomplete="ways_advertising"
                                    v-model="temp.advertisingWays"
                                    multiple
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item,i) in advertisingWays" :key="i" :value="item.id">{{ item.value }}</option>
                            </select>
                          </div>


                          <div class="mt-4">
                            <Label :label="'Укажите необходимые расходы на маркетинговую деятельность:'" :id="'market_costs'"
                                   :required="true"/>
                            <input type="text" name="market_costs" id="market_costs" autocomplete="market_costs"
                                   placeholder="В рублях"
                                   v-model="temp.marketingCost"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
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
  name: "step3.1",
  components: {
    Label,
  },
  data() {
    return {
      errorMess: "",
      temp: {
        productId: this.$route.params.id,
        marketingProductCost: "",
        volumeSales: "",
        marketingCost: "",
        typeSales: [],
        advertisingWays: [],
      },
      typeSales:[],
      advertisingWays:[],
    }
  },
  methods: {

    validForm(e) {
      e.preventDefault();
      if (this.temp.marketingProductCost && this.temp.volumeSales && this.temp.advertisingWays ) {
        console.log(JSON.stringify(this.temp))
        this.errorMess = ""
        axios.post('http://10.0.0.108:8080/marketing/create', this.temp);
      } else {
        this.errorMess = "Необходимо заполнить обязательные поля помеченные звездочкой"
      }
    }
  },
  async created() {
    try {
      this.typeSales = await axios.get('/types_sales/find_all')
          .then(res => {
            return res.data;
          })
    } catch (e) {
      console.error(e)
    }
    try {
      this.advertisingWays= await axios.get('/ways_advertising/find_all')
          .then(res => {
            return res.data;
          })
    } catch (e) {
      console.error(e)
    }


  }


}
</script>