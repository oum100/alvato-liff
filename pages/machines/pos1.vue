<template>
    <div class="row justify-center q-mt-md ">
        <div class="text-h4 text-weight-bold">Hello {{ profile?.displayName }}</div>
    </div>
    <div class="row justify-center q-mt-md ">
        <q-avatar size="100px"><img :src="profile?.pictureUrl"></q-avatar>
    </div>    

    <div v-if="store.displayThai" class="row justify-center q-mt-md">
        <div class="text-h5 text-center">กรุณาเลือกบริการ</div>
    </div>
    <div v-if="store.displayEnglish" class="row justify-center q-mt-xs">    
        <div class="text-h6 text-center">Please Select Service.</div>
    </div>
    <div v-if="store.displayChinese" class="row justify-center q-mt-xs">
        <div class="text-h6 text-center">請選擇服務</div>
    </div>
        


    <div class="row justify-center q-mt-xs">
        <q-card style="width:100%; max-width:280px;" >
            <q-img src="/images/kiosk/NewDryer-Blue.png">
                <div class="row items-center absolute-top">
                    <div class="col-4  text-center">
                        <q-avatar color="red" text-color="white" size="60px" font-size="40px" class="text-weight-bold">{{ machine.id }}</q-avatar>
                    </div>
                    <div class="col-8 ">
                        <span class="text-h4 text-weight-bold q-mx-sm">{{ $route.query.machine }}</span>
                        <div class="text-h6 q-mx-sm">{{machine.type}} {{ machine.size }}</div>
                    </div>
                
                    <div class="text-h4 q-mt-md">
                        Price(฿): {{ selectedPrice }}
                    </div>

                    <div class="text-h6 q-mr-xl">
                        Time(Mins): {{srvTime}} 
                    </div>

                    <div v-if="machine.type=='WASHER'" class="text-h6 q-mr-xl">
                        Water(°C): {{ waterTemp }} 
                    </div>
                    <div v-if="machine.type=='DRYER'" class="text-h6 q-mr-xl">
                        Temp(°C): 60-80
                    </div>

                            
                    <div  class="q-mx-auto q-mt-sm ">
                        <q-btn-toggle
                            v-model="selectedPrice"
                            size="20px"
                            no-caps
                            rounded
                            unelevated
                            toggle-color="deep-orange-10"
                            color="deep-orange-7"
                            text-color="white"
                            :options=machine.products
                            @click="btnToggleClick(selectedPrice)"
                        />
                    </div> 
                        

                    <div class="q-mx-auto q-my-md q-pt-md">
                        <q-btn rounded class="bg-blue-7" style="width:220px" @click="btnCheckOut(selectedPrice)">
                                <div class="text-h6 text-white">
                                    CHECK OUT
                                </div>
                        </q-btn>
                    </div>

                </div>
            </q-img>
        </q-card>
    </div>

</template>


<script setup lang="ts">
    import {washpointStore} from '@/stores/myStore'
    import liff from '@line/liff';
    import type { Profile } from '@liff/get-profile';

    const store = washpointStore()
    
    useHead({
        title: "Machine POS",
    });

    const route = useRoute()
    const selectedPrice = ref('40')
    const srvTime = ref('60')
    const waterTemp = ref('30')
    const machineName = ref('')

    const selectedProduct = ref({
        price:'',
        srvTime:'',
        temp:''
    })

    machineName.value = String(route.query.machine)
    // Find and get machine information for API 

    const machine = ref({
        name:'DM-001',
        id:'01',
        type:'DRYER',
        size:'8KG',
        status:"ready",
        disableMachine:false,
        selectPrice:'40',
        products:[
            {product: '60M', price:40, stime:'60', water:'30', label:'40฿', value:'40' },
            {product: '75M', price:50, stime:'75', water:'40', label:'50฿', value:'50' },
            {product: '90M', price:60, stime:'90', water:'60', label:'60฿', value:'60' },
        ]
    })


    const profile = ref<Profile | undefined>(undefined)


    onMounted( async() =>{
        if(liff.isLoggedIn()){
            profile.value = await liff.getProfile()
            // lineUid.value = profile.value.userId
            // accessToken.value = await liff.getAccessToken()
            console.log(profile.value)
            // console.log(accessToken)
      
        }else{
            await liff.login()
        }
   })    


    
    const  btnToggleClick = (val:string) => { 
        machine.value.products.forEach( (value,key) => {
            // console.log("item:",value.price,"===" , val);
            if(value.price === parseInt(val)){
                selectedPrice.value = String(value.price)
                srvTime.value = value.stime
                waterTemp.value = value.water
            }
        })
    }

    const btnCheckOut = (val:string) => {
        const router = useRouter()

        store.selectedPrice = selectedPrice.value
        store.srvTime = srvTime.value
        store.waterTemp = waterTemp.value




        // console.log("checkout: ",)
        router.push({path:"/machines/checkout"})
    }

</script>