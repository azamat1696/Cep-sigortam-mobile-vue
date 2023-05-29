<template>
                <Payment @getCardValues="getTransaction" :title="$t('motor_insurance')"/>
</template>
<script>
 import { vMaska } from "maska";
import { storeToRefs} from "pinia";
import {useFerdiKazaCreateStore} from "stores/ferdi-kaza-create";
import Payment from "components/Payment.vue";

 export default {
    name: "PaymentFerdiKaza",
     directives: { maska: vMaska },
    components: {
        Payment
    },
    setup() {
        const  ferdiKazaCreateStore = useFerdiKazaCreateStore();
        const { ferdiKaza } = storeToRefs(ferdiKazaCreateStore);
        return {
            ferdiKazaCreateStore,
            ferdiKaza
        };
    },

    methods: {
        getTransaction(cardNumber2,cardName2,cardMonth, cardYear, cardCvv) {

            let formData = new FormData();
            formData.append('CreditCardNumber',Number(cardNumber2.split(' ').join('')))
            formData.append('CreditCardName',cardName2)
            formData.append('CreditCardMonth',cardMonth)
            formData.append('CreditCardYear',cardYear)
            formData.append('CreditCardSecurity',cardCvv)
            for(const [key, value] of Object.entries(this.ferdiKaza)) {
                if (key === 'info'){
                    for(const [key2, value2] of Object.entries(value)) {

                            formData.append(key2,value2)
                    }
                } else {
                    formData.append(key,value)
                }


            }
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]);
            }
            this.ferdiKazaCreateStore.createFerdiKaza(formData)
        },
    },
};
</script>

