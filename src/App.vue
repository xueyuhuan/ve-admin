<template>
  <div id="app">
      <layout><router-view/></layout>
  </div>
</template>

<style lang="scss">
    #app{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        background-color: #f2f2f2;
    }
</style>
<script>
    import Layout from "./views/layout/layout";
    export default {
        components: {Layout}
    }
</script>