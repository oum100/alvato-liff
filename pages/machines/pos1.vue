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
            <div class="row justify-center">
                <div class="col-6 text-subtitle1 text-center">
                    Time: 33mins 
                </div>
                <div class="col-6 text-subtitle1 text-center">
                    Water: 30° 
                </div>
            </div>
            <div class="row items-center justify-center q-my-sm">
                <q-btn-toggle
                    v-model="selected"
                    class="my-custom-toggle"
                    size="20px"
                    no-caps
                    rounded
                    unelevated
                    toggle-color="deep-orange-10"
                    color="deep-orange-7"
                    text-color="white"
                    :options=choices
                />
            </div>   
            <div class="row justify-center q-mt-md">
                <q-btn rounded class="bg-green-7" style="width:240px">
                        <div class="text-h6 text-white">
                            ADD TO CART
                        </div>
                </q-btn>
            </div>
            <div class="row justify-center q-ma-md">
                <q-btn rounded class="bg-blue-7" style="width:240px">
                        <div class="text-h6 text-white">
                            CHECK OUT
                        </div>
                </q-btn>
            </div>
        </q-card>
    </div>

</template>

<script setup lang="ts">
    const route = useRoute()

    const selected = ref('30')
    const model = ref()
    
    const choices = ref([
        {label: '30 $', value: '30', time:'33mins', water:'30°'},
        {label: '40 $', value: '40', time:'60mins', water:'40°'},
        {label: '50 $', value: '50', time:'90mins', water:'60°'}
    ])

</script>