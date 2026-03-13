import { defineStore } from "pinia"
import { getCities } from "../services/citiesService"
import type { Cities } from "../types/Cities"

export const useCitiesStore = defineStore("cities", {
  state: () => ({
    cities: [] as Cities[],
    loading: false
  }),

  actions: {
    async fetchCities() {
      try {
        this.loading = true
        const data = await getCities()
        this.cities = data
      } catch (error) {
        console.error(error, 'Error store Cities')
        this.loading = false
      }
    }
  }
})