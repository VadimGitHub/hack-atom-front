<template>
  <div class="box">
    <div class="rating">
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=one?'color:red;':'color:#888'" @click="one=6-i">☆</span></div>
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=two?'color:red;':'color:#888'" @click="two=6-i">☆</span></div>
      <div class="rating"><span v-for="i in 5" :key="i" :style="6-i<=three?'color:red;':'color:#888'" @click="three=6-i">☆</span></div>
    </div>

    <h1 class="text-5xl">{{ rate }}</h1>
  </div>
</template>

<script>
export default {
  name: "Rating",
  data() {
    return {
      one: 0,
      two: 0,
      three: 0,

    }
  },
  computed: {
    rate() {
      return Number(this.one) + Number(this.two) + Number(this.three);
    }
  }
}
</script>

<style scoped>
.box {
  width: 300px ;
  display: flex;
  flex-direction: column;
}
</style>