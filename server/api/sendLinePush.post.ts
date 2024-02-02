import {validateLinePushMessage} from '~/models/lineOA'

export default defineEventHandler(async(event)=>{
    const body = await readBody(event)

    const {error} = await validateLinePushMessage(body)
    if(error){
        throw createError({
            statusCode:400,
            statusMessage: error.details[0].message,
            stack:''
        })
    }

    const headers = {
        'Content-Type':'Application/Json',
        'Authorization':`Bearer ${useRuntimeConfig().LINE_CHANNEL_ACCESS_TOKEN}`
    }

    const bodyMsg = {
        "to": body.uid,
        "messages":[
            {
                "type":"text",
                "text":body.message
            }
        ]
    }

    const lineMessageApi = 'https://api.line.me/v2/bot'
    const linePush = '/message/push'

    const response = await $fetch(`${lineMessageApi}${linePush}`,{
        method:'POST',
        headers,
        body:bodyMsg
    })

    return response
})