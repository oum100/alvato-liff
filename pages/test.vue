
<template>
 
    <div id="lineProfile">
        <div> Hello Line User</div>
        <img id="lineImage" width="100px" :src=profile?.pictureUrl>
        <div id="lineNeme">Hello:{{ profile?.displayName }}</div>
        <div id="lineUid">UID: {{ profile?.userId }}</div>
        <input id="lineMessage" type="text" v-model="lineMessage" placeholder="message">
        <button @click="send()" >Send</button>
    </div>

    <div>
        <button @click="logout">Logout</button> 
    </div>
</template>

<script setup lang="ts">
   import liff from '@line/liff';
   import type { Profile } from '@liff/get-profile';

   const config = useRuntimeConfig()

   const profile = ref<Profile | undefined>(undefined);
   const lineUid = ref('')
    const lineMessage = ref('')
    const lineApi = 'https://api.line.me/v2/bot'
    const headers = {
        'Content-Type' : 'Application/json',
        'Authentication': 'Bearer ' + useRuntimeConfig().appSecret
    }

    console.log(useRuntimeConfig().appSecret)

   const logout = async() => {
    if (liff.isLoggedIn()) {
        liff.logout();
        window.location.reload();
    }
   }

   const send = async() => {

    try{
        if(!lineMessage.value){
            throw new Error('Message not found')
        }
        
        const response = await useFetch('https://api.line.me/v2/bot/message/push',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${useRuntimeConfig().LINE_CHANNEL_ACCESS_TOKEN}`
            },
            body:{
                to:'Ued1d748291c0a2adb538023c2b541234',
                messages:[
                    {
                        "type":"text",
                        "text":"Teerin Leepaiboon"
                    }
                ]
            }
        })
        console.log(response)

    }catch(error){
        console.log('Error: ',error)
    }
   }

   onMounted( async() =>{
        if(liff.isLoggedIn()){
            profile.value = await liff.getProfile()
            lineUid.value = profile.value.userId
            console.log(profile.value)
        }else{
            await liff.login()
        }

        
    
       
   })

</script>
