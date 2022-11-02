<script setup>
const props = defineProps({
  variant: String,
});

const btnVariant = `btn-${props.variant || 'primary'}`;
</script>

<template>
  <button class="btn" :class="{ [btnVariant]: true }">
    <slot></slot>
  </button>
</template>
