<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="pages"/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  export default {
    components: {
      AppHeader: () => ({
        component: import('@/components/header/index')
      }),
      AppFooter: () => ({
        component: import('@/components/footer/index')
      }),
    },
  }
</script>

<style>
  .pages {
    margin-top: 96px;
  }
</style>
