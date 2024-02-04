<template>
    <h4>Hello</h4>
    <img width="100px" :src="profile?.pictureUrl">
    <div>Name: {{ profile?.displayName }}</div>
    <div>Uuid: {{ profile?.userId }}</div>
    <div>
        <button @click="logout">Logout</button>
    </div>

    <div>
        <label for="message-input">Push Message:</label><br />
        <input id="lineMessage" type="text" v-model="lineMessage" placeholder="message">
        <button @click="send">Send</button>
    </div>

    <div id="scanner">
        <button @click="scan">Scan</button>
        <div>Result: {{ scanResult }} </div>
    </div>
    
</template>
<style>
    #scanner{
        margin-top: 2em;
    }
</style>

<script setup lang="ts">
    import liff from '@line/liff';
    import type { Profile } from '@liff/get-profile';

    const profile = ref<Profile | undefined>(undefined)
    const accessToken = ref()
    const lineUid = ref('Ued1d748291c0a2adb538023c2b541234')
    
    const lineMessage = ref('')

    const scanResult = ref()

    onMounted( async() =>{
        if(liff.isLoggedIn()){
            profile.value = await liff.getProfile()
            accessToken.value = await liff.getAccessToken()
            lineUid.value = profile.value.userId
            // console.log(profile.value)
            // console.log(accessToken)
        }else{
            await liff.login()
        }
   })

    const logout = async() => {
        if (liff.isLoggedIn()) {
            liff.logout();
            window.location.reload();
        }
    }

    const send = async () =>{
        const {data, status} = await useFetch('/api/sendLinePush',{
            method:"POST",
            body:{
                'uid':lineUid.value,
                'message':lineMessage.value
            }
        })

        console.log(status.value)
    }

    const scan = async() => {
        liff
        .scanCodeV2()
        .then((result) => {
            // result = { value: "" }
            scanResult.value = result.value
            console.log("scanResult: ",result)
        })
        .catch((error) => {
            console.log("error", error);
        });
    }
   


</script>