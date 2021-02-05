<template>
  <div>
    <div class="text-center">
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Проекты для светлого будущего
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Среди наших проектов каждый может найти соответствующий его интересам
      </p>
    </div>

    <div class="px-6 py-8">
      <div class="flex justify-between container mx-auto">
        <div class="w-full">
          <div class="md:grid md:grid-cols-2 md:gap-6">
            <Span1 v-for="(project, i) in projects" :key="i">
              <Project class="mb-5 sm:mb-0" :project="project"/>
            </Span1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from '@/components/HomeProjectItem'
import Span1 from '@/components/Span1'

export default {
  data() {
    return {
      projects: [],
    };
  },
  components: {
    Project,
    Span1
  },
  mounted() {
    this.axios.get('/project/cards', {
      params: {
        limit: 6,
        offset: 0
      }
    }).then(res => {
      this.projects = res.data
    }).catch(error => {
      console.log(error)
    });
  }
}
</script>