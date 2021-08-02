<template>
  <div class="calendar-ui">
    <div class="sidebar">
      <input type="date" @change="e => handleChangeDate(e.target.value)" />
    </div>

    <div class="main-contents">
      <DateTable :dates="datesOfTargetMonth" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from '@vue/composition-api';
import DateTable from '@/presentational/calendar/DateTable.vue';
import { getDateOfTargetMonth } from '@/usecases/calendar/getDateOfMonth';

export default defineComponent({
  name: 'CalendarUi',

  components: {
    DateTable
  },

  setup() {

    const today = new Date();

    const date = reactive<{year: number, month: number, day: number}>({
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate()
    });

    const datesOfTargetMonth = computed(() => {
      return getDateOfTargetMonth(date.year, date.month);
    })

    return { datesOfTargetMonth, date }
  },

  methods: {
    handleChangeDate(selectedDate: string) {
      this.date.year = Number(selectedDate.split('-')[0]);
      this.date.month = Number(selectedDate.split('-')[1]);
      this.date.day = Number(selectedDate.split('-')[2]);
    },
  },
});
</script>

<style scoped lang="scss">
  div.calendar-ui {
    display: flex;
  }
</style>
