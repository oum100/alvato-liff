<template>
    <div class="row justify-center q-mt-xl">
        <div class="text-h4 text-center">เลือกการชำระเงิน</div>
    </div>
    <div class="row justify-center q-mt-xs">    
        <div class="text-h6 text-center">Select Payment</div>
    </div>
    <div class="row justify-center q-mt-xs">
        <div class="text-h6 text-center">選擇付款方式</div>
    </div>    

    <div class="row justify-center q-mt-sm">
        <q-card  bordered class="bg-blue-2" style="width: 100%; max-width: 300px;">        
            <q-card-section horizontal>
                <q-card-section>
                    
                    <div class="text-h5 text-weight-bold">Order Details</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">DRYER</div>
                    <div class="text-subtitle1 text-grey-8 text-weight-medium">ID: DM-001</div>
                    <div class="text-subtitle1 text-grey-8 text-weight-medium">Time(Mins): 60</div>
                    <div class="text-subtitle1 text-grey-8 text-weight-medium">Temp(°C): 60-80</div>   
                    <div class="row  text-weight-bold">
                        <q-chip color="red" text-color="white" icon="point_of_sale"> Price(฿): 40</q-chip>
                    </div>
                </q-card-section>

                 <q-card-section class="col-5 flex flex-center">
                    <q-img
                        class="rounded-borders"
                        src="/images/kiosk/NewDryer-Blue.png"
                        
                    />
                </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions align="around">
                <!-- <div class="row justify-center q-mt-sm">
                    <div class="text-h5 text-center">เลือกวิธีชำระเงิน</div>
                    <div class="text-h5 text-center">Select Payment</div>
                    <div class="text-h6 text-center">選擇付款方式</div>
                </div> -->
  

                <q-btn flat color="red" > Cancel </q-btn>
                <q-btn flat round icon="payments">
                    <q-tooltip anchor="top middle" self="bottom middle">
                        Cash
                    </q-tooltip>
                </q-btn>
                <q-btn flat round icon="qr_code_2">
                    <q-tooltip anchor="top middle" self="bottom middle">
                        Thai QR
                    </q-tooltip>                  
                </q-btn>

                <q-btn flat round icon="qr_code">
                    <q-tooltip anchor="top middle" self="bottom middle">
                        Alipay
                    </q-tooltip>
                </q-btn>
                <q-btn flat round icon="qr_code_scanner">
                    <q-tooltip anchor="top middle" self="bottom middle">
                        WeChat Pay
                    </q-tooltip>
                </q-btn>
                
            </q-card-actions>
        </q-card>
    </div>


</template>

<script setup lang="ts">
    import {washpointStore} from '@/stores/myStore'

    const store = washpointStore()

    const selectedPrice = store.selectedPrice
</script>