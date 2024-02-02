import Joi from 'joi'
export async function validateLinePushMessage(body:any){
    const schema = Joi.object({
        uid: Joi.string().required(),
        message: Joi.string().required()
    })
    return schema.validate(body)
}