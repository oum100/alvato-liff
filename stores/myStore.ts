import { defineStore } from "pinia";

export const washpointStore = defineStore("pointofsale", ()=> {
    const selectedProduct = ref({
        price:'40',
        srvTime:'60',
        temp:'60°-80°'
    })
    const selectedPrice = ref('40')
    const srvTime = ref('30')
    const waterTemp = ref('30°')

    const displayThai = ref(true)
    const displayEnglish = ref(true)
    const displayChinese = ref(true)
    const displayLanguage = ref(['TH','EN','CN'])


    return {
        selectedProduct,
        selectedPrice,
        srvTime,
        waterTemp,
        displayThai,
        displayEnglish,
        displayChinese,
        displayLanguage
    }
})