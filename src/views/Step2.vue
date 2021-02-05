<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 2</h3>
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
                            <Label :label="'Укажите название вашего продукта:'" :id="'productName'" :required="true"/>
                            <input type="text"
                                   name="productName"
                                   id="productName"
                                   autocomplete="productName"
                                   v-model="temp.productName"
                                   class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>


                          <div class="mt-4">
                            <Label :label="'Укажите основной функционал вашего продукта:'" :id="'productFunctional'" :required="true"/>
                            <textarea name="productFunctional"
                                      id="productFunctional"
                                      autocomplete="productFunctional"
                                      v-model="temp.productFunctional"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Укажите основные характеристики продукта:'" :id="'productCharacteristics'" :required="false"/>
                            <textarea name="productCharacteristics"
                                      id="productCharacteristics"
                                      autocomplete="productCharacteristics"
                                      v-model="temp.productCharacteristics"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Периодичность покупки продукта/оформления подписки и другое:'" :id="'usingProductId'" :required="true"/>
                            <select name="usingProductId"
                                    id="usingProductId"
                                    autocomplete="usingProductId"
                                    v-model="temp.stageId"
                                    class="mt-2 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                              <option v-for="(item, i) in usingProducts" :key="i" :value="item.id">{{item.value }}</option>
                            </select>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Преимущества продукта по сравнению с аналогами:'" :id="'productAdvantages'" :required="true"/>
                            <textarea name="productAdvantages"
                                      id="productAdvantages"
                                      autocomplete="productAdvantages"
                                      v-model="temp.productAdvantages"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="mt-4">
                            <Label :label="'Особенности продукта (наличие авторских прав, гостов, стандартов, сертификатов, экологичность продукта и др.):'" :id="'additionalInformation'" :required="false"/>
                            <textarea name="additionalInformation"
                                      id="additionalInformation"
                                      autocomplete="additionalInformation"
                                      v-model="temp.additionalInformation"
                                      class="mt-2 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      cols="30" rows="4"></textarea>
                          </div>

                          <div class="col-span-12 sm:col-span-6">
                            <label for="image" class="block text-sm font-medium text-gray-700">Загрузка фотографии
                              изделия: </label>
                            <input type="file" name="image" id="image" autocomplete="image"
                                   class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
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
import Label from "@/components/Label";

export default {
  name: "step1",
  components: {
    Label
  },
  data() {
    return {
      errorMess: "",
      temp: {
        projectId: 1488,
        productName: "",
        productFunctional: "",
        productCharacteristics: "",
        usingProductId: "",
        productAdvantages: "",
        additionalInformation: "",
      },
      usingProducts: [],
    }
  },
  methods: {
    validForm(e) {
      e.preventDefault();
      console.log(JSON.stringify(this.temp))
      if (this.temp.productFunctional && this.temp.productName && this.temp.usingProductId && this.temp.productAdvantages) {
        console.log(JSON.stringify(this.temp))
        this.errorMess = ""
        this.axios.post('/project/create', this.temp);
      } else {
        this.errorMess = "Необходимо заполнить обязательные поля помеченные звездочкой"
      }
    }
  },
  async created() {
    try {
      this.usingProducts = await this.axios.get('/using_product/find_all')
          .then(res => {
            return res.data;
          })
    } catch (e) {
      console.error(e)
    }
  }
}
</script>