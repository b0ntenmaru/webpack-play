<template>
  <div class="calendar-ui">
    <div class="calendar-table">
      <div class="calendar-table-item" v-for="rowIndex in 35" :key="rowIndex">
        <div v-for="date, index in dates" :key="index">
          <span v-if="date.dayOfWeekIndex === rowIndex">
            {{ date.year }}/{{ date.month }}/{{ date.day }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'DateTable',

  props: {
    dates: {
      type: Array,
      required: true,
    },
  },

  setup() {},
});
</script>

<style lang="scss" scoped>
div.calendar-ui {
  div.calendar-table {

    div.calendar-table-item {
      display: inline-block;
      width: 14%;
    }
  }
}
</style>
