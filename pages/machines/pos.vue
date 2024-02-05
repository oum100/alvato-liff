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
        <q-card  class="bg-deep-orange-2" style="width:100%; max-width:280px">
            <q-card-section>
                <div class="row items-center">
                    <div class="col-4  text-center">
                        <q-avatar color="red" text-color="white" size="60px" font-size="35px">{{ $route.query.id }}</q-avatar>
                    </div>
                    <div class="col-8 ">
                        <span class="text-h4 q-mx-sm">{{ $route.query.machine }}</span>
                        <div class="text-h6 q-mx-sm">10KG</div>
                    </div>
                </div>
            </q-card-section>
            <div class="row items-center justify-center text-h4">
                Selected: {{ selected }}
            </div>
            <div class="row items-center justify-center q-my-sm">
                <q-btn rounded class="bg-deep-orange-10" style="width:240px">
                    <div class="col-4 text-white">
                        <div class="text-h4">30</div>
                        <div class="text-subtitle2">Price</div>
                    </div>
                    <div class="col-8 text-white">
                        <div class="text-subtitle1">Time: 33 mins</div>
                        <div class="text-subtitle1">Water: 30°</div>
                    </div>
                </q-btn>
            </div>
            <div class="row items-center justify-center q-my-sm">
                <q-btn rounded class="bg-deep-orange-7" style="width:240px">
                    <div class="col-4 text-white">
                        <div class="text-h4">40</div>
                        <div class="text-subtitle2">Price</div>
                    </div>
                    <div class="col-8 text-white">
                        <div class="text-subtitle1">Time: 60 mins</div>
                        <div class="text-subtitle1">Water: 40°</div>
                    </div>
                </q-btn>
            </div>
            <div class="row items-center justify-center q-mt-sm  q-mb-md">
                <q-btn rounded class="bg-deep-orange-7" style="width:240px">
                    <div class="col-4 text-white">
                        <div class="text-h4">50</div>
                        <div class="text-subtitle2">Price</div>
                    </div>
                    <div class="col-8 text-white">
                        <div class="text-subtitle1">Time: 90 mins</div>
                        <div class="text-subtitle1">Water: 60°</div>
                    </div>
                </q-btn>
            </div>   
        </q-card>
    </div>
    <div class="row justify-center q-mt-md">
        <q-btn rounded class="bg-green-7" style="width:260px">
                <div class="text-h6 text-white">
                    ADD TO CART
                </div>
        </q-btn>
    </div>
    <div class="row justify-center q-mt-md">
        <q-btn rounded class="bg-blue-7" style="width:260px">
                <div class="text-h6 text-white">
                    CHECK OUT
                </div>
        </q-btn>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()

    const selected = ref('30')

    

</script>