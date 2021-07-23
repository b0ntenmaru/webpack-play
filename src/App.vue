<template>
  <div>
    App Component
    {{ age }} : {{ name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data() {
    return {
      age: 25 as number,
      name: 'hiroaki date' as string,
    }
  }
});
</script>
