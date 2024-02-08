<template>
    <div class="row justify-center q-mt-md ">
        <div class="text-h4 text-weight-bold">Hello {{ profile?.displayName }}</div>
    </div>
    <div class="row justify-center q-mt-md ">
        <q-avatar v-if="profile !== undefined"  size="80px"><img :src="profile?.pictureUrl">
            <q-badge floating rounded color="red">
                <q-icon
                    name="shopping_cart"
                    size="20px"
                    class="q-ml-xs"
                />
                {{ itemInCart }}
            </q-badge>
        </q-avatar>
        <q-avatar v-else size="80px"><img src="/images/users/Alva-Hi.png">
            <q-badge floating rounded color="red">
                <q-icon
                    name="shopping_cart"
                    size="20px"
                    class="q-ml-xs"
                />
                {{ itemInCart }}
            </q-badge>
        </q-avatar>        
        
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
        <q-card style="width:100%; max-width:280px;"  >
            <q-img :src="machineImage"> 
                <div class="row items-center absolute-top">
                    <div class="col-4  text-center">
                        <q-avatar color="red" text-color="white" size="60px" font-size="40px" class="text-weight-bold">{{ asset.id }}</q-avatar>
                    </div>
                    <div class="col-8 ">
                        <span class="text-h4 text-weight-bold q-mx-sm">{{ asset.name }}</span><br/>
                        <div class="text-h6 q-mx-sm">{{asset.type}} {{ asset.size }}</div>
                    </div>
                
                    <div class="text-h4 q-mt-md">
                        Price(฿): {{ selectedPrice }}
                    </div>

                    <div class="text-h6 q-mr-xl">
                        Time(Mins): {{srvTime}} 
                    </div>

                    <div v-if="asset.type=='WASHER'" class="text-h6 q-mr-xl">
                        Water(°C): {{ waterTemp }} 
                    </div>
                    <div v-if="asset.type=='DRYER'" class="text-h6 q-mr-xl">
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
                            :options=asset.products
                            @click="btnToggleClick(selectedPrice)"
                            :disable="machineDisable"
                        />
                    </div> 
                        

                    <div class="q-mx-auto q-my-md q-pt-md">
                        <q-btn rounded class="bg-blue-7" 
                        style="width:220px" 
                        @click="btnCheckOut(selectedPrice)"
                        :disabled="machineDisable"
                        >
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
    import {alvatoStore} from '@/stores/alvatoStore'
    import liff from '@line/liff';
    import type { Profile } from '@liff/get-profile';

    const store = alvatoStore()
    
    useHead({
        title: "Machine POS",
    });

    const route = useRoute()
    const selectedPrice = ref('')
    const srvTime = ref('')
    const waterTemp = ref('')
    const machineName = ref('')
    const machineImage = ref('')
    const machineDisable = ref(false)
    

    selectedPrice.value = store.selectedPrice

    const selectedProduct = ref([])
    const itemInCart = ref(0)

    machineName.value = String(route.query.machine)
    // Find and get machine information for API 

    const asset = ref({
        name:'DM-001',
        id:'01',
        type:'DRYER',
        size:'8KG',
        status:"ready",
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
            profile.value = store.getLineProfile
            if(profile.value === undefined){
                profile.value = await liff.getProfile()
                console.log(profile.value)
                store.setLineProfile(profile.value)
            }
        }else{
            await liff.login()
        }

        itemInCart.value = selectedProduct.value.length

        //Set image to display
        if(asset.value.type == 'DRYER'){
            machineImage.value = '/images/kiosk/NewDryer-Blue.png'
        }
        else if(asset.value.type == 'WASHER'){
            machineImage.value = '/images/kiosk/NewWasher-Green.png'
        }


        if(asset.value.status == 'ready'){
            machineDisable.value = false
        }else if(asset.value.status == 'offline' || asset.value.status == 'busy'){
            machineDisable.value = true
        }
   })    


    
    const  btnToggleClick = (val:string) => { 
        asset.value.products.forEach( (value,key) => {
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