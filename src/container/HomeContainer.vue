<template>
  <HomeUi />
</template>

<script lang="ts">
import Vue from 'vue';
import HomeUi from '@/presentational/HomeUi.vue';

export default Vue.extend({
  name: 'HomeContainer',
  components: {
    HomeUi
  },
});
</script>
