export type Product = {
    sku:string,
    name: string,
    price:number,
    qty: number,
    detail_1: string,
    detail_2: string,
    unit:string
}

export type BtnToggleOption = {
    label:string,
    value:string,
    slot:string|null,
    icon:string|null
}