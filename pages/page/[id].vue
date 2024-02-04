<template>
    <div>Page ID: {{ $route.params.id }}</div>
</template>

<script setup lang="ts">
    const route = useRoute()

    
    console.log("ID: ",route.params.id)

</script>