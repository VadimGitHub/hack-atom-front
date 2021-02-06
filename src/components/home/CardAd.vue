<template>
  <div>
    <div class="bg-white w-full  p-2 rounded-xl shadow border">
      <div class="flex-grow p-3 text-center">
        <div class="font-semibold text-gray-700">
          {{ title }}
        </div>
        <div class="text-sm text-gray-500">
          {{ content }}
        </div>
        <div class="text-gray-400 text-xs mt-2">
          <a :href="('mailto:') + email">{{ email }}</a>
        </div>
      </div>
      <div class="text-center">
        <button @click="respond" :disabled=isDisabled
                     class="inline-flex justify-center py-2 px-10 mr-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Откликнуться
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'content', 'email', 'id'],
  data() {
    return {
      isDisabled: false
    }
  },
  methods: {
    respond() {
      this.axios.post('/response_ads/create/' + this.id, {
        login: this.login,
        email: this.email,
        phone: this.phone,
        companyId: this.company,
      }).then(() => {
        this.isDisabled = true;

        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'Успешно',
          text: 'Заявка отправлена'
        });
      });
    }
  },
  created() {
    this.isDisabled = false;
  }
}
</script>

<style scoped>

</style>