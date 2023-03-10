import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Loading, Notify } from "quasar";

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
        },
        async ilceSelectGet() {
            await api
                .get("/ilceSelect")
                .then((res) => res.data)
                .then((res) => (this.ilce = res));
        },
        async mahalleSelectGet() {
            await api
                .get("/mahalleSelect")
                .then((res) => res.data)
                .then((res) => (this.mahalleSelect = res));
        },
        async belediyeSelectGet() {
            await api
                .get("/belediyeSelect")
                .then((res) => res.data)
                .then((res) => (this.belediyeSelect = res));
        },
        async sokakSelectGet() {
            await api
                .get("/sokakSelect")
                .then((res) => res.data)
                .then((res) => (this.sokakSelect = res));
        },
        async aracMarkaGet() {
            await api
                .get("/aracMarka")
                .then((res) => res.data)
                .then((res) => (this.aracMarka = res));
        },
        async aracModelSelectGet() {
            await api
                .get("/aracModelSelect")
                .then((res) => res.data)
                .then((res) => (this.aracModelSelect = res));
        },
        async ilGet() {
            await api
                .get("/il")
                .then((res) => res.data)
                .then((res) => (this.il = res));
        },
        async agentGet() {
            await api
                .get("/acent")
                .then((res) => res.data)
                .then((res) => (this.agent = res));
        },
        async renkGet() {
            await api
                .get("/renk")
                .then((res) => res.data)
                .then((res) => (this.renk = res));
        },
        async aracTipiGet() {
            await api
                .get("/aractipi")
                .then((res) => res.data)
                .then((res) => (this.aracTipi = res));
        }
    },
});
