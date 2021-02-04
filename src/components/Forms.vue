<template>
  <div>
    <section>

      <div class="flex flex-col h-screen bg-gray-100">
        <!-- Auth Card Container -->
        <div class="grid place-items-center mx-2 my-20 sm:my-auto">
          <!-- Auth Card -->
          <div class="w-11/12 p-12 sm:w-8/12 md:w-8/12 lg:w-8/12 2xl:w-10/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <h1 class="text-4xl p-5">Step 1</h1>
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-12 sm:col-span-6">
                      <label for="name" class="block text-sm font-medium text-gray-700">Краткое название
                        бизнес-инициативы/проекта: </label>
                      <input type="text" name="name" id="name" autocomplete="name"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                    <div class="col-span-12 sm:col-span-6">
                      <label for="target" class="block text-sm font-medium text-gray-700">Кратко описать идею
                        проекта:</label>
                      <textarea name="target" id="target" autocomplete="target"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-30 p-2"
                                cols="30" rows="10"></textarea>
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="problem_solved" class="block text-sm font-medium text-gray-700">Опишите, какие
                        проблемы
                        решает ваш проект : </label>
                      <textarea name="problem_solved" id="problem_solved" autocomplete="problem_solved"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-30 p-2"
                                cols="30" rows="10"></textarea>
                    </div>

                    <div class="col-span-6">
                      <label for="advantages" class="block text-sm font-medium text-gray-700">Кратко опишите, какими
                        преимуществами обладает ваш проект:</label>
                      <input type="text" name="advantages" id="advantages" autocomplete="advantages"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-6">
                      <label for="scope" class="block text-sm font-medium text-gray-700">Укажите на какую сферу
                        деятельности направлен ваш проект:</label>
                      <input type="text" name="scope" id="scope" autocomplete="scope"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                    <div class="col-span-6 sm:col-span-3">
                      <label for="stage_realization" class="block text-sm font-medium text-gray-700">Укажите на какой
                        стадии
                        находится ваш проект</label>
                      <select id="stage_realization" name="stage_realization" autocomplete="stage_realization"
                              class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  h-8 p-2">
                        <option>Начало</option>
                        <option>Середина</option>
                        <option>Конец</option>
                      </select>
                    </div>

                    <div class="col-span-6">
                      <label for="implement_period" class="block text-sm font-medium text-gray-700">Укажите необходимый
                        срок для окончательной реализации вашего проекта (в месяцах):</label>
                      <input type="text" name="implement_period" id="implement_period" autocomplete="implement_period"
                             placeholder="В месяцах"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Сохранить
                  </button>
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-200 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Отменить
                  </button>
                </div>
              </div>
            </form>


            <h1 class="text-4xl">Step 2.1</h1>

            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-12 sm:col-span-6">
                      <label for="product_name" class="block text-sm font-medium text-gray-700">Название продукта:
                        (краткое название продукта/услуги)</label>
                      <input type="text" name="product_name" id="product_name" autocomplete="product_name"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="functional" class="block text-sm font-medium text-gray-700">Функционал: (на что
                        направлен продукт)</label>
                      <textarea name="functional" id="functional" autocomplete="functional"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-30 p-2"
                                cols="30" rows="10"></textarea>
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="last_name" class="block text-sm font-medium text-gray-700">Характеристики: (при
                        наличии) </label>
                      <input type="text" name="last_name" id="last_name" autocomplete="family-name"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="analog" class="block text-sm font-medium text-gray-700">Список аналогов: </label>
                      <input type="text" name="analog" id="analog" autocomplete="product"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="advantage" class="block text-sm font-medium text-gray-700">Список преимуществ перед
                        аналогами: </label>
                      <input type="text" name="advantage" id="advantage" autocomplete="advantage"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                    <div class="col-span-12 sm:col-span-6">
                      <label for="add_info" class="block text-sm font-medium text-gray-700">Описание дополнительных
                        сведений: (авторские права, если таковые имеются; сертификат качества, гарантии; экологичность
                        продукта; эксплуатация и сервис)</label>
                      <textarea name="add_info" id="add_info" autocomplete="add_info"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-30 p-2"
                                cols="30" rows="10"></textarea>
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="production" class="block text-sm font-medium text-gray-700">Способ
                        производства: </label>
                      <input type="text" name="production" id="production" autocomplete="production"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Сохранить
                  </button>
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-200 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Отменить
                  </button>
                </div>
              </div>
            </form>


            <h1 class="text-4xl">Step 2.2</h1>

            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-12 sm:col-span-6">
                      <label for="industy" class="block text-sm font-medium text-gray-700">Отрасль
                        использования:</label>
                      <input type="text" name="industy" id="industy" autocomplete="industy"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="segment" class="block text-sm font-medium text-gray-700">Целевой сегмент:</label>
                      <textarea name="segment" id="segment" autocomplete="segment"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-30 p-2"
                                cols="30" rows="10"></textarea>
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="season" class="block text-sm font-medium text-gray-700">Сезонная зависимость: </label>
                      <input type="text" name="season" id="season" autocomplete="season"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="competitor" class="block text-sm font-medium text-gray-700">Основные
                        конкуренты: </label>
                      <input type="text" name="competitor" id="competitor" autocomplete="product"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="competitor_advantage" class="block text-sm font-medium text-gray-700">Конкурентные
                        преимущества по сравнению с ними: </label>
                      <input type="text" name="competitor_advantage" id="competitor_advantage"
                             autocomplete="competitor_advantage"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                    <div class="col-span-12 sm:col-span-6">
                      <label for="conclusion" class="block text-sm font-medium text-gray-700">Вывод по анализу размера
                        рынка: </label>
                      <input type="text" name="conclusion" id="conclusion" autocomplete="conclusion"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                    <div class="col-span-12 sm:col-span-6">
                      <label for="SWOT" class="block text-sm font-medium text-gray-700">Наличие SWOT-анализа: загрузка
                        SWOT-анализа </label>
                      <input type="file" name="SWOT" id="SWOT" autocomplete="SWOT"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-1 ">
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                      <label for="analys" class="block text-sm font-medium text-gray-700">Наличие анализа рынка:
                        загрузка анализа </label>
                      <input type="file" name="analys" id="analys" autocomplete="analys"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-1 ">
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                      <label for="analys_competitor" class="block text-sm font-medium text-gray-700">Наличие анализа
                        конкурентов: загрузка анализа </label>
                      <input type="file" name="analys_competitor" id="analys_competitor" autocomplete="SWOT"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-1 ">
                    </div>

                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Сохранить
                  </button>
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-200 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Отменить
                  </button>
                </div>
              </div>
            </form>


            <h1 class="text-4xl">Step 3.1</h1>

            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-12 sm:col-span-6">
                      <label for="cost" class="block text-sm font-medium text-gray-700">Стоимость продукта:</label>
                      <input type="text" name="cost" id="cost" autocomplete="cost"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="num_sales" class="block text-sm font-medium text-gray-700">Возможное количество продаж
                        в месяц, год или др.: (ожидаемый объем продаж с разбивкой по периодам времени;)</label>
                      <input type="text" name="num_sales" id="num_sales" autocomplete="num_sales"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">

                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="period" class="block text-sm font-medium text-gray-700">Периодичность покупки или
                        использования: </label>
                      <input type="text" name="period" id="period" autocomplete="period"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="realize" class="block text-sm font-medium text-gray-700">Как будет реализовываться
                        продукт: (канал сбыта) </label>
                      <input type="text" name="realize" id="realize" autocomplete="realize"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="advertising" class="block text-sm font-medium text-gray-700">Рекламная политики с
                        четкой проработкой всех составляющих (указать что будет использоваться для рекламы:
                        интернет,социальные сети,газеты, баннеры, форумы, и др.: </label>
                      <input type="text" name="advertising" id="advertising" autocomplete="advertising"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Сохранить
                  </button>
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-200 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Отменить
                  </button>
                </div>
              </div>
            </form>


            <h1 class="text-4xl">Step 3.2</h1>

            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-12 sm:col-span-6">
                      <label for="cost_price" class="block text-sm font-medium text-gray-700">Себестоимость продукта:
                        (доставка, маркетинг, хранение, з.п., электроэнергия газ и т.д., производственные
                        операционные)</label>
                      <input type="text" name="cost_price" id="cost_price" autocomplete="cost_price"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="prod_time" class="block text-sm font-medium text-gray-700">Срок изготовления
                        продукции:</label>
                      <input type="text" name="prod_time" id="prod_time" autocomplete="prod_time"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">

                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="standarts" class="block text-sm font-medium text-gray-700">Наличие гостов,
                        стандартов: </label>
                      <input type="text" name="standarts" id="standarts" autocomplete="standarts"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="power" class="block text-sm font-medium text-gray-700">Наличие производственных
                        мощностей:</label>
                      <input type="text" name="power" id="power" autocomplete="power"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="estate" class="block text-sm font-medium text-gray-700">Наличие движимого/недвижимого
                        имущества: </label>
                      <input type="text" name="estate" id="estate" autocomplete="estate"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="credist" class="block text-sm font-medium text-gray-700">Наличие кредитов на развитие
                        бизнеса: (лизинг, ипотека) </label>
                      <input type="text" name="credist" id="credist" autocomplete="credist"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="addiction" class="block text-sm font-medium text-gray-700">Зависимость от поставщиков,
                        какие продукты для изготовления закупаются на стороне: </label>
                      <input type="text" name="addiction" id="addiction" autocomplete="addiction"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>


                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Сохранить
                  </button>
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-200 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Отменить
                  </button>
                </div>
              </div>
            </form>


            <h1 class="text-4xl">Step 3.3</h1>

            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-12 sm:col-span-6">
                      <label for="property" class="block text-sm font-medium text-gray-700">Форма собственности:</label>
                      <input type="text" name="property" id="property" autocomplete="property"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="human_count" class="block text-sm font-medium text-gray-700">Количество участников во
                        владении бизнеса:</label>
                      <input type="text" name="human_count" id="human_count" autocomplete="human_count"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">

                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="staff_count" class="block text-sm font-medium text-gray-700">Количество
                        пресонала:</label>
                      <input type="text" name="staff_count" id="staff_count" autocomplete="staff_count"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="expenses_staff" class="block text-sm font-medium text-gray-700">Расходы на
                        персонал:</label>
                      <input type="text" name="expenses_staff" id="expenses_staff" autocomplete="expenses_staff"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="struct" class="block text-sm font-medium text-gray-700">Структура управления: </label>
                      <input type="text" name="struct" id="struct" autocomplete="struct"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="expenses_control" class="block text-sm font-medium text-gray-700">Расходы на
                        управление:</label>
                      <input type="text" name="expenses_control" id="expenses_control" autocomplete="expenses_control"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="outsource" class="block text-sm font-medium text-gray-700">Функции, отданные на
                        аутсорсинг: </label>
                      <input type="text" name="outsource" id="outsource" autocomplete="outsource"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="expenses_fun" class="block text-sm font-medium text-gray-700">Расходы на данные
                        функции: </label>
                      <input type="text" name="expenses_fun" id="expenses_fun" autocomplete="expenses_fun"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                    <div class="col-span-12 sm:col-span-6">
                      <label for="ask" class="block text-sm font-medium text-gray-700">Проблемные вопросы:
                        (необходимость управленчиских кадров, необходимость персонала и др.) </label>
                      <input type="text" name="ask" id="ask" autocomplete="ask"
                             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8 p-2">
                    </div>

                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Сохранить
                  </button>
                  <button type="submit"
                          class="inline-flex justify-center py-2 px-10 mr-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-200 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Отменить
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>

    </section>
  </div>
</template>
<script>
export default {}
</script>