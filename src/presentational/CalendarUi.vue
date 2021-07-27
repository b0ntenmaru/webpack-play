<template>
  <div>
    {{ dates }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { getDateOfTargetMonth } from '@/usecases/calendar/getDateOfMonth';

export default defineComponent({
  name: 'CalendarUi',

  setup() {
    const dates = getDateOfTargetMonth(2021, 7);

    return { dates }
  },    
});
</script>
