<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  to: String,
  icon: String,
  label: String,
});
const iconClass = props.icon ? `fa-${props.icon}` : 'fa-box';
</script>

<template>
  <li class="relative px-6 py-3">
    <RouterLink
      :to="{ name: to }"
      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
    >
      <AppIcon :icon="['fas', iconClass]"></AppIcon>
      <span class="ml-4">{{ label || '' }}</span>
    </RouterLink>
  </li>
</template>
