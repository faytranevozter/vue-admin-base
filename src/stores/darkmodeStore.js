import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage, usePreferredDark } from '@vueuse/core';

export const useDarkModeStore = defineStore('darkmode', () => {
  const dark = ref(false);

  // get darkmode from storage with default value from system settings
  const darkModeStorage = useStorage('darkmode', usePreferredDark());
  dark.value = darkModeStorage.value;

  function toggle() {
    dark.value = !dark.value;

    // update the storage
    darkModeStorage.value = dark.value;

    if (dark.value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  if (dark.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  return { dark, toggle };
});
