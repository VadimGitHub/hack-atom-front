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
                          <label for="productName" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Укажите название вашего
                            продукта:</label>
                          <input type="text" name="productName" id="productName" autocomplete="productName"
                                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="productFunctional" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Укажите основной
                            функционал вашего продукта:</label>
                          <textarea name="productFunctional" id="productFunctional" autocomplete="productFunctional"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-30 p-2"
                                    cols="30" rows="7"></textarea>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="productCharacteristics" class="block text-sm font-medium text-gray-700">Укажите основные
                            характеристики продукта: </label>

                          <textarea name="productCharacteristics" id="productCharacteristics" autocomplete="productCharacteristics"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-30 p-2"
                                    cols="30" rows="7"></textarea>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="usingProductId" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Укажите
                            периодичность покупать ваш продукт/оформлять подписку и другое: </label>
                          <select name="usingProductId" id="usingProductId" autocomplete="usingProductId"
                                  v-model="temp.stageId" 
                                  class="mt-1 block w-full py-2 px-3 border border-gray-300 border-b-2 border-gray-100 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-10">
                            <option v-for="(item,i) in usingProducts" :key="i" :value="item.id">{{ item.value }}</option>
                          </select>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="productAdvantages" class="block text-sm font-medium text-gray-700"><span
                              class="text-red-600">*</span>Кратко опишите
                            преимущества продукта по сравнению с аналогами: </label>
                          <textarea name="productAdvantages" id="productAdvantages" autocomplete="productAdvantages"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-30 p-2"
                                    cols="30" rows="7"></textarea>
                        </div>


                        <div class="col-span-12 sm:col-span-6">
                          <label for="additionalInformation" class="block text-sm font-medium text-gray-700">Опишите
                            особенности продукта (наличие авторских прав, гостов, стандартов, сертификатов,
                            экологичность продукта и др.)</label>
                          <textarea name="additionalInformation" id="additionalInformation"
                                    autocomplete="additionalInformation"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-30 p-2"
                                    cols="30" rows="7"></textarea>
                        </div>

                        <div class="col-span-12 sm:col-span-6">
                          <label for="image" class="block text-sm font-medium text-gray-700">Загрузка фотографии
                            изделия: </label>
                          <input type="file" name="image" id="image" autocomplete="image"
                                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-b-2 border-gray-100 rounded-md h-8 p-2">
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
        projectId: 1488,
        productName: "",
        productFunctional: "",
        productCharacteristics: "",
        usingProductId: "",
        productAdvantages: "",
        additionalInformation: "",
      },
      usingProducts:[],

    }
  },
  methods: {

    validForm(e) {
      e.preventDefault();
      if (this.temp.productFunctional && this.temp.productName && this.temp.usingProductId && this.temp.productAdvantages) {
        console.log(JSON.stringify(this.temp))
        this.errorMess = ""
        axios.post('/project/create', this.temp);
      } else {
        this.errorMess = "Необходимо заполнить обязательные поля помеченные звездочкой"
      }
    }
  },
  async created() {
    try {
      this.usingProducts =await axios.get('/using_product/find_all')
          .then(res => {
            return res.data;
          })
    } catch (e) {
      console.error(e)
    }
  }



}
</script>