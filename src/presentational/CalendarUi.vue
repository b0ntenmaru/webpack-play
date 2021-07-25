<template>
  <div>
    Calendar UI
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'


export default defineComponent({
  // type inference enabled
  name: 'CalendarUi',

  setup() {
    const message = ref<string>('hello world');

    return { message };
  }
})
</script>
