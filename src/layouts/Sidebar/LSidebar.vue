<script setup>
import AppButton from '../../components/AppButton.vue';
import LSidebarMenu from './LSidebarMenu.vue';

const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <div class="py-4 text-gray-500 dark:text-gray-400">
    <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
      {{ appName }}
    </a>

    <LSidebarMenu />

    <div class="px-6 my-6">
      <AppButton>
        Create account
        <span class="ml-2" aria-hidden="true">+</span>
      </AppButton>
    </div>
  </div>
</template>
