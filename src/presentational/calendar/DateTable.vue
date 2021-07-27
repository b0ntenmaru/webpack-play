<template>
  <div class="calendar-ui">
    <div class="calendar-row">
      <div v-for="rowIndex in 35" :key="rowIndex">
        {{ rowIndex }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'DateTable',

  setup() {},    
});
</script>

<style lang="scss" scoped>
div.calendar-ui {
  div.calendar-row {
    display: flex;
  }
}
</style>
