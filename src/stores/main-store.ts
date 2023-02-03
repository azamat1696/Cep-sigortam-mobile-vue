import { defineStore } from 'pinia';
import {api} from "boot/axios";

export const useMainStore = defineStore('main', {
  state: () => ({
    countries: [],
  }),
  getters: {
    countriesGetter: (state) => state.countries,
  },
  actions: {
  async  countriesGet() {
      await api.get('Https://test.neareastsigorta.com/api/ulke').then(res => res.data ).then(res => this.countries = res)
    },
  },
});
