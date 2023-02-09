import { defineStore } from 'pinia';
import {api} from "boot/axios";

export const useMainStore = defineStore('main', {
  state: () => ({
    countries: [],
    aracMarka: [],
    aracTipi: [],
  }),
  getters: {
    countriesGetter: (state) => state.countries,
  },
  actions: {
  async  countriesGet() {
         await api.get('/ulke').then(res => res.data ).then(res => this.countries = res)
    },
  async  aracMarkaGet() {
         await api.get('/aracMarka').then(res => res.data).then(res => this.aracMarka = res)
    console.log(this.aracMarka)
    },
  async  aracTipiGet(id:number) {
      await api.get('/aracModelSelect/'+id).then(res => res.data).then(res => this.aracTipi = res)

    },
  },
});
