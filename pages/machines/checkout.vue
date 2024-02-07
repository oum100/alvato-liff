<template>
    <div class="row justify-center q-mt-md">
        <div class="text-h4 text-center">เลือกการชำระเงิน</div>
    </div>
    <div class="row justify-center q-mt-xs">    
        <div class="text-h6 text-center">Select Payment</div>
    </div>
    <div class="row justify-center q-mt-xs">
        <div class="text-h6 text-center">選擇付款方式</div>
    </div>    

    <div class="row justify-center q-mt-xs">Price: {{ store.selectedPrice }}</div>
    <div class="row justify-center q-mt-xs">Time: {{ store.srvTime }}</div>
    <div class="row justify-center q-mt-xs">Water: {{ store.waterTemp }}</div>
</template>

<script setup lang="ts">
    import {washpointStore} from '@/stores/myStore'

    const store = washpointStore()

    const selectedPrice = store.selectedPrice
</script>