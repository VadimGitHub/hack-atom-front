<template>
  <div id="app">
    <notifications group="foo" />
    <Nav class="mb-6 "/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>
