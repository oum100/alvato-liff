<template>
    <p>This Slug Page : {{ $route.params.slug }}</p>
</template>
  
<script setup lang="ts">
    const route = useRoute()

    console.log("Slug: ",route.params.slug)
</script>