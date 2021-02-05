<template>
  <div id="app">
    <notifications group="foo"/>
    <Nav class="mb-6 "/>
    <router-view/>
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
