<template>
  <div class="px-6 py-8">
    <div class="flex justify-between container mx-auto">
      <div class="w-full">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
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
  props: ['limit', 'offset', 'enableScroll', 'url'],
  data() {
    return {
      projects: [],
    };
  },
  components: {
    Project,
    Span1
  },
  methods: {
    loadMore() {
      if (!this.enableScroll) {
        return;
      }

      this.limit = this.limit + 1;
      this.axios.get(this.url, {
        params: {
          limit: this.limit,
          offset: 0
        }
      }).then(res => {
        this.projects = res.data;
      }).catch(error => {
        console.log(error)
      });
    },
  },
  mounted() {
    this.axios.get(this.url, {
      params: {
        limit: this.limit,
        offset: this.offset
      }
    }).then(res => {
      this.projects = res.data
    }).catch(error => {
      console.log(error)
    });
  }
}
</script>