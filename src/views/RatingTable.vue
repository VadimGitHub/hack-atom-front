<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                <tr>
                  <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Проект
                  </th>
                  <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Заявитель
                  </th>
                  <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Этап
                  </th>
                  <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Рейтинг
                  </th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(project, i) in projects" :key="i">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      <router-link :to="(/project/) + project.id + '/' + project.status" role="menuitem"
                                   class="text-indigo-600 hover:text-indigo-500">
                        {{ project.projectName }}
                      </router-link>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      {{ project.userName }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ project.userEmail }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <StagesMini :status="project.status"/>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import StagesMini from "@/components/StagesMini";

export default {
  data() {
    return {
      limit: 9999,
      projects: {}
    }
  },
  components: {
    StagesMini
  },
  created() {
    this.axios.get('/project/cards', {
      params: {
        limit: this.limit,
        offset: 0
      }
    }).then(res => {
      this.projects = res.data;
    }).catch(error => {
      console.log(error)
    });
  }
}
</script>

<style scoped>

</style>