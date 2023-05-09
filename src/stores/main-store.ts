import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";
import {ErrorHandle} from "src/utils/ErrorHandle";

export const useMainStore = defineStore("main", {
    state: () => ({
        countries: [],
        aracMarka: [],
        aracTipi: [],
        aracTarz: [],
        il: [],
        ilce: [],
        mahalleSelect: [],
        agent: [],
        aracModelSelect: [],
        renk: [],
        belediyeSelect: [],
        sokakSelect: [],
        jobs: [],


    }),
    getters: {
        countriesGetter: (state) => state.countries,
        aracModelByMarkaIdGetter: (state) => {
            return (markaKodu: number) =>
                state.aracModelSelect.filter(
                    // @ts-ignore
                    (model) => +model.Marka_Kod == markaKodu
                );
        },
    },
    actions: {
        async countriesGet() {
            await api
                .get("/ulke")
                .then((res) => res.data)
                .then((res) => (this.countries = res));
            console.log(this.countries);
        },
        async ilceSelectGet() {
            await api
                .get("/ilceSelect")
                .then((res) => res.data)
                .then((res) => (this.ilce = res)).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async mahalleSelectGet() {
            await api
                .get("/mahalleSelect")
                .then((res) => res.data)
                .then((res) => (this.mahalleSelect = res)).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async belediyeSelectGet() {
            await api
                .get("/belediyeSelect")
                .then((res) => res.data)
                .then((res) => (this.belediyeSelect = res)).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async sokakSelectGet() {
            await api
                .get("/sokakSelect")
                .then((res) => res.data)
                .then((res) => (this.sokakSelect = res)).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async aracMarkaGet() {
            await api
                .get("/aracMarka")
                .then((res) => res.data)
                .then((res) => (this.aracMarka = res)).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async aracModelSelectGet() {

            await api
                .get("/aracModelSelect")
                .then((res) => res.data)
                .then((res) => {
                    this.aracModelSelect = res

        }).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async ilGet() {
            await api
                .get("/il")
                .then((res) => res.data)
                .then((res) => (this.il = res)).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async agentGet() {
            const filterAgentOrder = [9,3,8,5,10,1,7,4,6,19,11,18,13,24,22,21,23,15,12,26,14,20,16,27,25,17,28];

            await api
                .get("/acent")
                .then((res) => res.data)
                .then((res) => {
                    this.agent = res.sort((a: any, b: any) => {
                        return filterAgentOrder.indexOf(a.id) - filterAgentOrder.indexOf(b.id);
                    })
                }).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async renkGet() {
            await api
                .get("/renk")
                .then((res) => res.data)
                .then((res) => (this.renk = res)).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async aracTipiGet() {
            await api
                .get("/aractipi")
                .then((res) => res.data)
                .then((res) => (this.aracTipi = res)).catch((err) => {
                    ErrorHandle(err)
                });
        },
        async getJobs() {
            await api
                .get("/meslekler")
                .then((res) => res.data)
                .then((res) => (this.jobs = res)).catch((err) => {
                    ErrorHandle(err)
                });

        }
    },
});
