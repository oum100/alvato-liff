import { defineStore } from "pinia";
import type { Profile } from '@liff/get-profile';
import type { Product } from '~~/alvato/misc/types'

export const alvatoStore = defineStore("pointofsale", ()=> {
    const selectedProduct = ref({})
    const selectedPrice = ref('40')
    const srvTime = ref('30')
    const waterTemp = ref('30°')

    const displayThai = ref(true)
    const displayEnglish = ref(true)
    const displayChinese = ref(true)
    const displayLanguage = ref(['TH','EN','CN'])





    const lineProfile = ref<Profile | undefined>(undefined) 

    const getLineProfile = computed(() => lineProfile.value )

    function setLineProfile(profile: Profile){
        if(profile) lineProfile.value = profile;
    }

    /**
     * @desc Clears line profile
    */
    function clearLineProfile() {
        lineProfile.value = undefined;
    }

    return {
        selectedProduct,
        selectedPrice,
        srvTime,
        waterTemp,
        displayThai,
        displayEnglish,
        displayChinese,
        displayLanguage,
        lineProfile,
        getLineProfile,
        setLineProfile,
        clearLineProfile
    }
})