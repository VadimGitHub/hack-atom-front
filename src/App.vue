<template>
  <div id="app">
    <div class="content">
      <notifications group="foo"/>
      <Nav class="mb-6 "/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>
