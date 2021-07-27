<template>
  <CalendarUi />
</template>

<script lang="ts">
import Vue from 'vue';
import CalendarUi from '@/presentational/calendar/CalendarUi.vue';

export default Vue.extend({
  name: 'CalendarContainer',

  components: {
    CalendarUi
  },
});
</script>
