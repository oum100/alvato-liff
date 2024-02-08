<template>
    <div class="row justify-center q-mt-md ">
        <div class="text-h4 text-weight-bold">Hello {{ store.lineProfile?.displayName }}</div>
    </div>
    <div class="row justify-center q-mt-md ">
        <q-avatar v-if="store.lineProfile !== undefined"  size="80px"><img :src="store.lineProfile?.pictureUrl">

        </q-avatar>
        <q-avatar v-else size="80px"><img src="/images/users/Alva-Hi.png">

        </q-avatar>        
        
    </div>    

    <div class="row justify-center q-mt-md">
        <div class="text-h4 text-center">เลือกวิธีชำระเงิน</div>
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
                    <div class="text-subtitle1 text-grey-8 text-weight-medium">Time(Mins): {{ store.srvTime }}</div>
                    <div class="text-subtitle1 text-grey-8 text-weight-medium">Temp(°C): {{ store.waterTemp }}</div>   
                    <!-- <div class="row  text-weight-bold">
                        <q-chip color="primary" class="glossy" text-color="white" icon="point_of_sale">
                             Price(฿): {{ store.selectedPrice }}
                        </q-chip>
                    </div> -->
                </q-card-section>

                 <q-card-section class="col-5 flex flex-center">
                    <q-img
                        class="rounded-borders"
                        src="/images/kiosk/NewDryer-Blue.png"
                        
                    />
                </q-card-section>
                
            </q-card-section>
            <div class="row justify-center text-weight-bold q-mb-sm">
                <q-chip color="primary" class="glossy" text-color="white" 
                icon="point_of_sale" square>
                        Price(฿): {{ store.selectedPrice }}
                </q-chip>
            </div>

            <q-separator />

            <q-card-actions align="around">
                <!-- <div class="row justify-center q-mt-sm">
                    <div class="text-h5 text-center">เลือกวิธีชำระเงิน</div>
                    <div class="text-h5 text-center">Select Payment</div>
                    <div class="text-h6 text-center">選擇付款方式</div>
                </div> -->
  
                <q-btn flat stack icon="payments" class="text-caption">
                    <!-- <q-tooltip anchor="top middle" self="bottom middle">
                        Cash
                    </q-tooltip> -->
                    Cash
                </q-btn>
                <q-btn flat stack icon="qr_code_2" class="text-caption">
                    <!-- <q-tooltip anchor="top middle" self="bottom middle">
                        Thai QR
                    </q-tooltip>     -->
                    ThaiQR              
                </q-btn>

                <q-btn flat stack icon="qr_code" class="text-caption">
                    <!-- <q-tooltip anchor="top middle" self="bottom middle">
                        Alipay
                    </q-tooltip> -->
                    Alipay
                </q-btn>
                <q-btn flat stack icon="qr_code_scanner" class="text-caption">
                    <!-- <q-tooltip anchor="top middle" self="bottom middle">
                        WeChat Pay
                    </q-tooltip> -->
                    WeChat
                </q-btn>
                
            </q-card-actions>
            <q-card-actions align="around">
                <q-btn color="red"  to="/machines/pos1" unelevated rounded style="width: 260px"> Cancel </q-btn>
            </q-card-actions>
        </q-card>
    </div>
    <div class="row justify-center q-mt-sm">
        <q-btn @click="paid" color="green"> Clear </q-btn>
    </div>
    
    

</template>

<script setup lang="ts">
    import {alvatoStore} from '@/stores/alvatoStore'

    const store = alvatoStore()

    
    function paid(){
        store.clearLineProfile()
        //Thank you page with receipt send to customer
    

    }

</script>