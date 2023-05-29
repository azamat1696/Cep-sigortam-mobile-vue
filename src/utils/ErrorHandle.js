import {Notify} from "quasar";
import {routerInstance} from 'boot/customRouteInstance'
   export function ErrorHandle (errorsObj,locale='tr',customMessage=null) {

    let error = errorsObj.response.data?.error
     let data = errorsObj.response.data
    let errors = errorsObj.response.data?.errors
    let errorMessage = errorsObj.response.data?.message
    let status = errorsObj.response.status
    /*   alert(JSON.stringify(errorsObj.response.data)    )

       Notify.create({
              type:'negative',
              timeout:10000,
              message:JSON.stringify(errorsObj.response.data)
       })
       return false*/
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
            message: locale === 'tr' ? data.errorTr : data.errorEng || data.errorEng || data.Error2|| data.Error1 || errorsObj.response.data.error|| "Something went wrong",
            //timeout:1000,
            position:'bottom',
            progress:true,
            closeBtn:'X',
            closeBtnClass:'text-white'
        })
        Notify.create({
            type:'negative',
            message: data.Error1 || data.errorEng || data.Error2 || errorsObj.response.data.error|| "Something went wrong",
            //timeout:1000,
            position:'bottom',
            progress:true,
            closeBtn:'X',
        })
        Notify.create({
            type:'negative',
            message: data.Error2 || data.errorEng || data.Error2 || data.Error1 || errorsObj.response.data.error|| "Something went wrong",
            //timeout:1000,
            position:'bottom',
            progress:true,
            closeBtn:'X',
        })

    } else if (status === 400) {
        Notify.create({
            type:'negative',
            message: data.errorTr || data.errorEng || data.error || data.message || "Something went wrong",
            //timeout:1000,
            position:'bottom',
            progress:true
        })
    } else if (status === 500){
        Notify.create({
            type:'negative',
            message:  "Sunucu hatası oluştu lütfen daha sonra tekrar deneyiniz",
            //timeout:1000,
            position:'bottom',
            progress:true
        })
    } else {
        Notify.create({
            type:'negative',
            message: data.errorTr || data.errorEng || error || customMessage || "Something went wrong",
           // timeout:1000,
            position:'bottom',
            progress:true
        })
    }
}
