<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="px-6 py-8">
        <div class="flex justify-between container mx-auto">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Шаг 4.1</h3>
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
                            <Label :label="'Укажите чистую приведенную стоимость:'" :id="'npv'"
                                   :required="true"/>
                            <input type="text"
                                   name="npv"
                                   id="npv"
                                   autocomplete="npv"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div>
                            <Label :label="'Укажите срок окупаемости проектов:'" :id="'pbp'"
                                   :required="true"/>
                            <input type="text"
                                   name="pbp"
                                   id="pbp"
                                   autocomplete="pbp"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div>
                            <Label :label="'Укажите внутреннюю норму доходности:'" :id="'irr'"
                                   :required="true"/>
                            <input type="text"
                                   name="irr"
                                   id="irr"
                                   autocomplete="irr"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div>
                            <Label :label="'Укажите индекс прибыльности:'" :id="'pi'"
                                   :required="true"/>
                            <input type="text"
                                   name="pi"
                                   id="pi"
                                   autocomplete="pi"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div>
                            <Label :label="'Укажите рентабельность активов:'" :id="'profitability'"
                                   :required="true"/>
                            <input type="text"
                                   name="profitability"
                                   id="profitability"
                                   autocomplete="profitability"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div>
                            <Label :label="'Укажите коэффициент финансовой зависимости:'" :id="'fz'"
                                   :required="true"/>
                            <input type="text"
                                   name="fz"
                                   id="fz"
                                   autocomplete="fz"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <div>
                            <Label :label="'Укажите коэффициент общей ликвидности:'" :id="'liquidity'"
                                   :required="true"/>
                            <input type="text"
                                   name="liquidity"
                                   id="liquidity"
                                   autocomplete="liquidity"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>

                          <h2 class="text-xl mt-5">Загрузка отчетов:</h2>
                          <div>
                            <Label :label="'Загрузка финансовой отчетности:'" :id="'fin_rep'"/>
                            <input type="file"
                                   name="fin_rep"
                                   id="fin_rep"
                                   autocomplete="fin_rep"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>
                          <div>
                            <Label :label="'Загрузка расчетов показателей:'" :id="'math_indication'"/>
                            <input type="file"
                                   name="math_indication"
                                   id="math_indication"
                                   autocomplete="math_indication"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                          </div>
                          <div>
                            <Label :label="'Прогноз движения денежных потоков:'" :id="'move_money'"/>
                            <input type="file"
                                   name="move_money"
                                   id="move_money"
                                   autocomplete="move_money"
                                   class="mt-2 mb-1 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
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