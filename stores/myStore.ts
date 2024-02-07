import { defineStore } from "pinia";

export const washpointStore = defineStore("pointofsale", ()=> {
    const selectedProduct = ref(0)
    const selectedPrice = ref('40')
    const srvTime = ref('30')
    const waterTemp = ref('30°')

    return {
        selectedProduct,
        selectedPrice,
        srvTime,
        waterTemp
    }
})