<template>
    <div class="row justify-center q-mt-md">
        <div class="text-h4 text-center">เลือกบริการ</div>
    </div>
    <div class="row justify-center q-mt-xs">    
        <div class="text-h6 text-center">Select Service</div>
    </div>
    <div class="row justify-center q-mt-xs">
        <div class="text-h6 text-center">選擇服務</div>
    </div>
        
    <div class="row justify-center q-mt-xs">
        <q-card  class="bg-deep-orange-2" style="width:100%; max-width:200px">
            <q-card-section>
                <div class="row items-center">
                    <div class="col-4  text-center">
                        <q-avatar color="red" text-color="white" icon="directions" size="60px"/>
                    </div>
                    <div class="col-8 ">
                        <span class="text-h6 q-mx-sm">DM-010</span>
                        <div class="text-h6 q-mx-sm">10KG</div>
                    </div>
                </div>
            </q-card-section>
            <div class="row items-center justify-center text-h6">
                Selected: 30
            </div>
            <div class="row items-center justify-center">
                <q-btn rounded class="bg-deep-orange-10" style="width:150px">
                    <div class="col-4 text-white">
                        <div class="text-h4">30</div>
                        <div class="text-subtitle2">Price</div>
                    </div>
                    <div class="col-8 text-white">
                        <div class="text-subtitle1">33 mins</div>
                        <div class="text-subtitle1">30°</div>
                    </div>
                </q-btn>
            </div>
               
        </q-card>
    </div>

   
</template>

<script setup lang="ts">
    const route = useRoute()

    
    

</script>