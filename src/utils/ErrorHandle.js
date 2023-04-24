import {Notify} from "quasar";
import {routerInstance} from 'boot/customRouteInstance'
 export function ErrorHandle (errorsObj,customMessage=null,locale='Tr') {

    let error = errorsObj.response.data?.error
     let data = errorsObj.response.data
    let errors = errorsObj.response.data?.errors
    let errorMessage = errorsObj.response.data?.message
    let status = errorsObj.response.status
    if (status === 401) {
        localStorage.removeItem('authToken')
        localStorage.removeItem('user')
        routerInstance.push('/auth/login')
    }else if (status === 422) {
        let errorMsgTimeout = 1000;
        for (const [k,v] of Object.entries(errors))
        {
            errorMsgTimeout += 1000
            errors[k].forEach(e => {
                Notify.create({
                    type:'negative',
                    message: e,
                    timeout:errorMsgTimeout,
                    position:'bottom',
                    progress:true
                })
            })
        }
    }else if (status === 404) {

        Notify.create({
            type:'negative',
            message: data.Error2|| data.Error1||data.errorTr || data.errorEng || errorsObj.response.data.error,
            //timeout:1000,
            position:'bottom',
            progress:true,
            closeBtn:'X',
            closeBtnClass:'text-white'
        })

    } else if (status === 400) {
        console.log(data)
        Notify.create({
            type:'negative',
            message: data.errorTr || data.errorEng || data.error || data.message || 'Something went wrong',
            timeout:1000,
            position:'bottom',
            progress:true
        })
    } else {
        Notify.create({
            type:'negative',
            message: data.errorTr || data.errorEng || error || customMessage || 'Something went wrong',
            timeout:1000,
            position:'bottom',
            progress:true
        })
    }
}
