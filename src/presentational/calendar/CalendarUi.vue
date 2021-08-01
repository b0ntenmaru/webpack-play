<template>
  <div class="calendar-ui">
    <DateTable :dates="dates" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DateTable from '@/presentational/calendar/DateTable.vue';
import { getDateOfTargetMonth } from '@/usecases/calendar/getDateOfMonth';

export default defineComponent({
  name: 'CalendarUi',

  components: {
    DateTable
  },

  setup() {
    const dates = getDateOfTargetMonth(2021, 7);

    return { dates }
  },
});
</script>
