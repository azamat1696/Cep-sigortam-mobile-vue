import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
import { ErrorHandle } from "src/utils/ErrorHandle";

export const useFerdiKazaCreateStore = defineStore("ferdiKazaCreate", {
   state: () => ({
         ferdiKaza : {},
         createdFerdiKaza: {}
   }),
    getters: {

    },
    actions: {
        async hesaplaFerdiKaza(payload: any) {
            Loading.show();
           return  await api.post("/hesapla260Cep", payload).then((response) => {
                console.log(response.data);
               if(response.data.status === 'success'){
                   this.ferdiKaza = response.data;
                   return true;
                   //this.router.push({ name: "FerdiKazaHesaplananPirim" });
                }

            }).catch((error) => {
                ErrorHandle(error);
                return false;
            }).finally(() => {
                Loading.hide();
            });
        },
        async createFerdiKaza(payload: any) {
            Loading.show();
            await api.post("/Kayet260Cep", payload).then((response) => {
                console.log(response.data);
                if (response.data.status === 'success') {
                    this.createdFerdiKaza = response.data;
                    this.router.push({ name: "FerdiKazaSuccess" });
                }
            }).catch((error) => {
                ErrorHandle(error);
            }).finally(() => {
                Loading.hide();
            });
        }
    }
});
