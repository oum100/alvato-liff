<template>
    <div> Double bracket  {{ $route.params.slug }}</div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'My home page',
  name: 'slug1'
})
</script>