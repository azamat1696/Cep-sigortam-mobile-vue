import {defineStore} from "pinia";
import {Loading} from "quasar";
import {api} from "boot/axios";
import {ErrorHandle} from "src/utils/ErrorHandle";

export const useTrafikSigortaCreateStore = defineStore("trafikSigortaCreate", {
    state: () => ({
        trafikSigorta: {},
        createdTrafikSigorta: {}
    }),
    getters: {

    },
    actions: {
          async hesaplaTrafikSigorta(payload: any) {
              Loading.show();
            return   await api.post("/hesapla310Cep", payload).then((response) => {
                  if(response.data.status === 'success') {
                      this.trafikSigorta = response.data;
                      //this.router.push({name: "TrafikSigortaHesaplananPirim"});
                      return true
                  }
              }).catch((error) => {
                  ErrorHandle(error);
                  return false
              }).finally(() => {
                  Loading.hide();
              });
         },
         async createTrafikSigorta(payload: any) {
                Loading.show();
                  await api.post("/Kayet310Cep", payload).then((response) => {
                      //console.log('>>>>>>>>>',response.data);
                      if(response.data.status === 'success') {
                          this.createdTrafikSigorta = response.data;
                          this.router.push({name: "TrafikSigortaSuccess"});
                      }
                  }
                ).catch((error) => {
                    ErrorHandle(error);
                }).finally(() => {
                    Loading.hide();
                });
         }
    }
});
